import { notFound, useNavigate, useParams } from "@tanstack/react-router"
import { CheckCircle2, ThumbsUp, Ticket, User } from "lucide-react"
import { Separator } from "#/components/ui/separator"
import { InfoRow } from "../logi/InfoRow"
import { OrderLineItem } from "../logi/OrderLineItem"
import { Button } from "../ui/button"
import { Card, CardTitle } from "../ui/card"
import { useGetOrderById } from "#/api/logiSawgger"

export default function OrderCompletedLayout() {
	const navigate = useNavigate()

	const { orderId } = useParams({ from: "/order-completed/$orderId" })
	const { data, isPending } = useGetOrderById(orderId)

	if (isPending) {
		return null
	}

	if (!data) {
		throw notFound()
	}

	const order = data.data

	function handleGoHome() {
		navigate({
			to: "/",
		})
	}

	return (
		<div className="flex flex-col h-screen" dir="rtl">
			<div className="flex flex-col flex-1 gap-4 pt-20 items-center p-4">
				<CheckCircle2 className="size-30 text-primary" strokeWidth={1} />
				<h1 className="text-3xl font-medium leading-2">תודה רבה!</h1>
				<h2 className="text-xl text-muted-foreground text-center">
					ההזמנה שלך נקלטה בהצלחה וממתינה לאישור
				</h2>
				<Card className="w-full max-h-85 overflow-y-scroll">
					{order.orderItems.map((orderItem) => (
						<div key={orderItem.id}>
							<OrderLineItem
								variant={orderItem.variant}
								quantity={orderItem.quantity}
							/>
							<Separator />
						</div>
					))}
				</Card>
				<Card className="w-full">
					<CardTitle className="px-3 py-1.5">פרטי הזמנה:</CardTitle>
					<Separator />
					<div className="p-3 flex flex-col gap-1">
						<InfoRow primary icon={Ticket}>
							מספר הזמנה: 8827391
						</InfoRow>
						<InfoRow primary icon={User}>
							הזמנה בעבור: רותם לוגסי
						</InfoRow>
						<InfoRow icon={ThumbsUp}>גורם מאשר: אחשםדיגשדוגישדן</InfoRow>
					</div>
				</Card>
			</div>
			<div className="flex w-full p-4">
				<Button size="lg" className="flex-1" onClick={handleGoHome}>
					חזור למסך הבית
				</Button>
			</div>
		</div>
	)
}
