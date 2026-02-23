import { clients } from "../data/clients"
import ClientSlot from "./ClientSlot"



export function ClientSection() {
    return (
        <section className="bg-black pt-16 pb-28 px-[15%]">
    <p className="text-white text-[2rem] text-center pb-8 my-16">
        Some of our clients
    </p>

    <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-y-37.5 gap-x-80">
            {clients.map((client) => (
                <ClientSlot key={client.id} src={client.src} />
            ))}
        </div>
    </div>
</section>

    )
}