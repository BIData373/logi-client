import { useState } from "react"
import { OrderCard } from "../logi/OrderCard"
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs"

type TabKey = "done" | "pending" | "rejected"

export default function OrdersLayout() {
	const [activeTab, setActiveTab] = useState<TabKey>("pending")

	return (
		<div className="flex flex-col gap-4 p-4">
			<Tabs
				value={activeTab}
				onValueChange={(value) => setActiveTab(value as TabKey)}
			>
				<TabsList>
					<TabsTrigger value="done">הסתיים</TabsTrigger>
					<TabsTrigger value="pending">בהזמנה</TabsTrigger>
					<TabsTrigger value="rejected">נדחה</TabsTrigger>
				</TabsList>
			</Tabs>
			<div className="flex flex-col gap-2">
				{[1, 2, 3].map((i) => (
					<OrderCard
						key={i}
						item={{
							title: "כלב חמוד",
							subtitle: "שחור 44",
							imageSrc: "/dog.jpg",
							quantity: 1,
						}}
						statusLabel="ממתין לאישור"
						date={new Date().toLocaleDateString()}
					/>
				))}
			</div>
		</div>
	)
}
