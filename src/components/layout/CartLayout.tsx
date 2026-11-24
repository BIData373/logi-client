import { useNavigate } from "@tanstack/react-router"
import { ShoppingBasket, ThumbsUp, User } from "lucide-react"
import { useGetUserCart } from "#/api"
import { CheckoutBar } from "../logi/CheckoutBar"
import { Header } from "../logi/Header"
import { InfoRow } from "../logi/InfoRow"
import { Card } from "../ui/card"
import { Separator } from "../ui/separator"
import { CartItem } from "../logi/CartItem"

export default function CartLayout() {
	const navigate = useNavigate()
	const { data: cartItems, isLoading } = useGetUserCart({ id: 1 })

	function handleGoToSummaryPage(orderId: number) {
		navigate({
			to: "/order-completed/$orderId",
			params: {
				orderId,
			},
		})
	}

	return (
		!isLoading && (
			<div className="flex flex-col h-screen" dir="rtl">
				<Header variant="back" title="העגלה שלי" />
				<div className="flex flex-col gap-2 p-4 flex-1 overflow-y-scroll">
					<Card className="shrink-0">
						<h4 className="text-muted-foreground text-sm p-3 pb-2 font-medium">
							הזמנה בעבור:
						</h4>
						<Separator />
						<div className="flex flex-col gap-1 p-3">
							<InfoRow icon={User} primary>
								רותם לוגסי, פלוגת BI DATA
							</InfoRow>
							<InfoRow icon={ThumbsUp}>עוד מישהו מגניב</InfoRow>
						</div>
					</Card>
					<InfoRow className="text-lg font-medium" icon={ShoppingBasket}>
						סל קניות
					</InfoRow>
					<div className="flex flex-col gap-2">
						{cartItems?.map((cartItem) => (
							<CartItem cartItem={cartItem} key={cartItem.id} />
						))}
					</div>
				</div>
				<CheckoutBar
					variant="summary"
					count={10}
					onAction={() => {
						handleGoToSummaryPage(1)
					}}
				/>
			</div>
		)
	)
}
