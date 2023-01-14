import React from 'react';

export type DbmlTableProps = { id: string, columns: {name: string, type: string}[]}


export const DbmlTable = (props: DbmlTableProps) => (
    <svg>
        <g>
            <rect width={400} height={300} rx={2} fill='white' />
            <text 
                x={30}
                y={20}
                textAnchor="middle"
                alignmentBaseline="baseline"
                style={{ fontWeight: 'bold'}}
            >
                {props.id}
            </text>
            <line x1={0} y1={30} x2={400} y2={30} stroke='black' />
            {
                props.columns.map((column) => {
                    return (
                        <g key={column.name}>
                        <text
                            x={5}
                            y={60}
                            textAnchor="left"
                            alignmentBaseline="baseline"
                            style={{ fontSize: '15' }}
                        >
                            {column.name}
                        </text>
                        <text
                            x={column.name.length * 10 + 10}
                            y={60}
                            textAnchor="justify"
                            alignmentBaseline="baseline"
                            style={{ fontStyle: 'italic' }}
                        >
                            {column.type}
                        </text>
                        </g>
                        
                    )
                })
            }
        </g>
    </svg>
)
    
