import { ShineBorder } from "@/components/magicui/shine-border";

export default function SocialMediaSection() {
    return (
        <section className="flex flex-col items-center p-8">
            <h2 className="text-blue-500 text-lg text-center">Social Media</h2>
            <h1 className="text-black font-bold text-4xl mt-2">Join The Chain</h1>
            <p className="text-black text-lg mt-2 text-center max-w-[50rem]">
                Connect with us on social media and contribute to building a better ecosystem for Haibu. 
                Stay updated, share your thoughts, and collaborate with our growing community!
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-6">
                <a href="https://x.com/haibusocial" target="_blank" rel="noopener noreferrer">
                    <ShineBorder className="w-40 h-40 flex flex-col items-center justify-center" color="blue">
                        <svg className="w-8 h-8" viewBox="0 0 124 113" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M97.3806 0.887207H116.111L75.201 48.1546L123.503 112.251H85.551L55.977 73.3967L21.9679 112.251H3.23771L47.1048 61.7646L0.77417 0.887207H39.7123L66.5748 36.5225L97.3806 0.887207ZM90.7259 100.866H101.076L34.0435 11.5274H22.7077L90.7259 100.866Z" fill="currentColor" />
                        </svg>
                        <p className="text-black mt-2 font-bold">Twitter</p>
                        <p className="text-black"> News and Updates</p>
                    </ShineBorder>
                 </a>
                <a href="https://t.me/haibusocial" target="_blank" rel="noopener noreferrer">
                    <ShineBorder className="w-40 h-40 flex flex-col items-center justify-center" color="blue">
                        <svg className="w-8 h-8 lucide lucide-send" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                            <path d="m21.854 2.147-10.94 10.939"></path>
                        </svg>
                        <p className="text-black mt-2 font-bold">Telegram</p>
                        <p className="text-black">Discussions</p>
                    </ShineBorder>
                </a>
                <a href="https://github.com/Haibu-Project/" target="_blank" rel="noopener noreferrer">
                    <ShineBorder className="w-40 h-40 flex flex-col items-center justify-center" color="blue">
                        <svg className="w-8 h-8 lucide lucide-github" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                            <path d="M9 18c-4.51 2-5-2-7-2"></path>
                        </svg>
                        <p className="text-black mt-2 font-bold">GitHub</p>
                        <p className="text-black"> Resources</p>
                    </ShineBorder>
                </a>
            </div>
        </section>
    );
}
