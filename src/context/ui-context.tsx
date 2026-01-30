"use client"

import React, { createContext, useContext, useState } from "react"

interface UIContextType {
    isBookingOpen: boolean
    openBooking: () => void
    closeBooking: () => void
}

const UIContext = createContext<UIContextType | undefined>(undefined)

export function UIProvider({ children }: { children: React.ReactNode }) {
    const [isBookingOpen, setIsBookingOpen] = useState(false)

    const openBooking = () => setIsBookingOpen(true)
    const closeBooking = () => setIsBookingOpen(false)

    return (
        <UIContext.Provider value={{ isBookingOpen, openBooking, closeBooking }}>
            {children}
        </UIContext.Provider>
    )
}

export function useUI() {
    const context = useContext(UIContext)
    if (context === undefined) {
        throw new Error("useUI must be used within a UIProvider")
    }
    return context
}
