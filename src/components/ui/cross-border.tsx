import { Plus } from 'lucide-react'
import React from 'react'

export default function CrossBorder() {
    return (
        <>
            <div className=" bg-background absolute -left-3 -top-3 "><Plus className="w-6 h-6 text-gray-600" /> </div>
            <div className=" bg-background absolute -right-3 -top-3 "><Plus className="w-6 h-6 text-gray-600" /> </div>
            <div className=" bg-background absolute -right-3 -bottom-3 "><Plus className="w-6 h-6 text-gray-600" /> </div>
            <div className=" bg-background absolute -left-3 -bottom-3 "><Plus className="w-6 h-6 text-gray-600" /> </div>

        </>
    )
}
