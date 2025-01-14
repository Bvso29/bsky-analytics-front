"use client"

import { DashboardContent } from "@/components/Dashboard";
import { InteractionProvider } from "../../../providers/useInteractionContext";

export default function Dashboard() {
    return (
        <InteractionProvider>
            <DashboardContent />
        </InteractionProvider>
    );
}