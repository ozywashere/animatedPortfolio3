import Image from "next/image";
import Link from "next/link";
import Socials from "@/components/Socials";

const Header = () => {
    return <header className="absolute z-30 w-full flex items-center justify-center px-16 h-14 xl:px-px-0 xl:h-[90px] ">
        <div className="container">
            <div className="flex flex-col gap-y-4 xl:flex-row items-center xl:justify-between">
                {/*    Logo*/}
                <Link href="/">
                    <Image src={"/logo.svg"} alt="" width={220} height={48} priority={true}/>
                </Link>
                {/*    Socials*/}
                <Socials/>
            </div>
        </div>
    </header>;
};

export default Header;
