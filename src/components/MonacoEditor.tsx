import { useEffect, useRef } from 'react'
import * as monaco from 'monaco-editor'

self.MonacoEnvironment = {
  getWorker: function (_workerId: string, label: string) {
    const getWorkerModule = (moduleUrl: string, label: string) => {
      return new Worker(moduleUrl, {
        name: label,
        type: 'module'
      })
    }

    switch (label) {
      case 'json':
        return getWorkerModule('/monaco-editor/esm/vs/language/json/json.worker?worker', label)
      case 'css':
      case 'scss':
      case 'less':
        return getWorkerModule('/monaco-editor/esm/vs/language/css/css.worker?worker', label)
      case 'html':
      case 'handlebars':
      case 'razor':
        return getWorkerModule('/monaco-editor/esm/vs/language/html/html.worker?worker', label)
      case 'typescript':
      case 'javascript':
        return getWorkerModule('/monaco-editor/esm/vs/language/typescript/ts.worker?worker', label)
      default:
        return getWorkerModule('/monaco-editor/esm/vs/editor/editor.worker?worker', label)
    }
  }
}

interface MonacoEditorProps {
  value?: string
  language?: string
  theme?: string
  height?: string | number
  width?: string | number
  onChange?: (value: string | undefined) => void
  options?: monaco.editor.IStandaloneEditorConstructionOptions
}

export function MonacoEditor({
  value = '',
  language = 'javascript',
  theme = 'vs-dark',
  height = '400px',
  width = '100%',
  onChange,
  options = {},
}: MonacoEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null)
  const editorInstanceRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null)

  useEffect(() => {
    if (editorRef.current) {
      const editor = monaco.editor.create(editorRef.current, {
        value,
        language,
        theme,
        automaticLayout: true,
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        fontSize: 14,
        lineNumbers: 'on',
        renderWhitespace: 'selection',
        ...options,
      })

      editorInstanceRef.current = editor

      if (onChange) {
        editor.onDidChangeModelContent(() => {
          onChange(editor.getValue())
        })
      }

      return () => {
        editor.dispose()
      }
    }
  }, [])

  useEffect(() => {
    if (editorInstanceRef.current && value !== editorInstanceRef.current.getValue()) {
      editorInstanceRef.current.setValue(value)
    }
  }, [value])

  useEffect(() => {
    if (editorInstanceRef.current) {
      const model = editorInstanceRef.current.getModel()
      if (model) {
        monaco.editor.setModelLanguage(model, language)
      }
    }
  }, [language])

  useEffect(() => {
    if (editorInstanceRef.current) {
      monaco.editor.setTheme(theme)
    }
  }, [theme])

  return (
    <div 
      ref={editorRef} 
      style={{ 
        height: typeof height === 'number' ? `${height}px` : height,
        width: typeof width === 'number' ? `${width}px` : width,
      }} 
    />
  )
}