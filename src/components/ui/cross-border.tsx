import { Plus } from 'lucide-react'
import React from 'react'

export default function CrossBorder() {
    return (
        <>
            <div className=" md:block hidden bg-background absolute -left-3 -top-3 "><Plus className="w-6 h-6 text-black/70" /> </div>
            <div className=" md:block hidden bg-background absolute -right-3 -top-3 "><Plus className="w-6 h-6 text-black/70" /> </div>
            <div className=" md:block hidden bg-background absolute -right-3 -bottom-3 "><Plus className="w-6 h-6 text-black/70" /> </div>
            <div className=" md:block hidden bg-background absolute -left-3 -bottom-3 "><Plus className="w-6 h-6 text-black/70" /> </div>

        </>
    )
}
