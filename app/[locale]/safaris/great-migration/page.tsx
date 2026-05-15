import type { Metadata } from "next"
import GreatMigrationClient from "./GreatMigrationClient"

export const metadata: Metadata = {
  title: "Serengeti Great Migration Safari | Private Luxury Tanzania Tours",
  description:
    "Experience the Serengeti Great Migration with private guides, river-crossing positioning, and luxury tented camps. Book your Tanzania Great Migration safari today.",
}

export default function GreatMigrationPage() {
  return <GreatMigrationClient />
}