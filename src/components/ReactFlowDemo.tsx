import { useCallback } from 'react'
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  type Connection,
  BackgroundVariant,
} from '@xyflow/react'

import '@xyflow/react/dist/style.css'

const initialNodes = [
  { 
    id: '1', 
    position: { x: 0, y: 0 }, 
    data: { label: 'Start Node' },
    type: 'input',
  },
  { 
    id: '2', 
    position: { x: 0, y: 100 }, 
    data: { label: 'Process Node' },
  },
  { 
    id: '3', 
    position: { x: 200, y: 0 }, 
    data: { label: 'Decision Node' },
  },
  { 
    id: '4', 
    position: { x: 200, y: 100 }, 
    data: { label: 'End Node' },
    type: 'output',
  },
]

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3', animated: true },
  { id: 'e3-4', source: '3', target: '4' },
]

interface ReactFlowDemoProps {
  height?: string | number
}

export function ReactFlowDemo({ height = '400px' }: ReactFlowDemoProps) {
  const [nodes, , onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds: any[]) => addEdge(params, eds)),
    [setEdges]
  )

  return (
    <div style={{ 
      height: typeof height === 'number' ? `${height}px` : height,
      width: '100%' 
    }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Dots} />
      </ReactFlow>
    </div>
  )
}