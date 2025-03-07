import { ShoppingCart, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";

const Header = () => {
    return (
        <header className="w-full border-b">
            <div className="wrapper flex-between">
                <div className="flex-start">
                    <Link href="/" className="flex-start">
                        <Image
                            src="/images/logo.png"
                            alt={APP_NAME}
                            width={50}
                            height={50}
                            priority={true}
                        />
                        <span className="hidden lg:block font-bold text-2xl ml-3 wavy-font text-[#5a0606]">
                            {APP_NAME}
                        </span>
                    </Link>
                </div>
                <div className="space-x-2">
                    <Button asChild variant="ghost">
                        <Link href="/cart">
                            <ShoppingCart className="w-5 h-5" /> Cart
                        </Link>
                    </Button>
                    <Button asChild variant="ghost">
                        <Link href="/sign-in">
                            <UserIcon className="w-5 h-5" /> Sign In
                        </Link>
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;