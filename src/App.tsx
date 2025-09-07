import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MonacoEditor } from "@/components/MonacoEditor"
import { ReactFlowDemo } from "@/components/ReactFlowDemo"
import { useAppStore } from "@/stores/useAppStore"

function App() {
  const { count, increment, decrement, reset } = useAppStore()
  const [code, setCode] = useState(`function hello() {
  console.log("Hello from Monaco Editor!");
}

hello();`)

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-8 p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Agent Web</h1>
        <p className="text-lg text-muted-foreground text-center max-w-2xl mt-2">
          A modern React + Vite SPA with Monaco Editor, React Flow, TanStack Query, Tailwind CSS + shadcn/ui, and Zustand state management.
        </p>
      </div>
      
      <div className="flex gap-4 items-center">
        <Button onClick={increment}>
          Count is {count}
        </Button>
        <Button variant="outline" onClick={decrement}>
          Decrement
        </Button>
        <Button variant="secondary" onClick={reset}>
          Reset
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Monaco Editor</h2>
          <div className="border rounded-lg overflow-hidden">
            <MonacoEditor
              value={code}
              language="javascript"
              theme="vs-dark"
              height="400px"
              onChange={(value) => setCode(value || '')}
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">React Flow</h2>
          <div className="border rounded-lg overflow-hidden">
            <ReactFlowDemo height="400px" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
