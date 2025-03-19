import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardFooter,
  CardAction,
} from "@/components/ui/card"
import { Button } from "../ui/button"

export function CardSection({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className="flex flex-col gap-6">
      <Card className="rounded-lg border">
        <CardContent>
            <img src={props.image} alt="image" />
            <CardAction><Button className="h-11 font-bold bg-gradient-to-r from-green-950  to-green-800 text-white"> View detail</Button></CardAction>
            <CardFooter className="flex flex-col">
                <h6 className="text-2xl font-bold">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </h6>
                <div className="w-full h-1 bg-slate-950 my-5"></div>
                <p className="font-bold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt
                </p>
            </CardFooter>
        </CardContent>
      </Card>
    </div>
  )
}
