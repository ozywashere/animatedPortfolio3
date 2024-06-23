import Image from "next/image";
import Link from "next/link";

import {HiArrowRight} from "react-icons/hi2";

const ProjectsBtn = () => {
    return <div className="mx-auto xl:mx-0">
        <Link href={"/work"} className="relative w-[185px] h-[185px] flex items-center justify-center bg-circleStar bg-cover bg-no-repeat group">
            <Image src={'/rounded-text.png'} alt="rounded-text" width={141} height={148} className="animate-spin-slow max-w-[141px] h-[148px]" />
            <HiArrowRight  className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300"/>
        </Link>
    </div>;
};

export default ProjectsBtn;
