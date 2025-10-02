export default function About() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-white to-gray-100">
            <h1 className="text-5xl font-extrabold mb-6 text-gray-900">About</h1>
            <p className="text-xl text-gray-700 max-w-2xl mb-8">
                Hi, I&apos;m a passionate developer with a keen interest in interior design and aesthetics. I enjoy creating web experiences that are both visually appealing and user-friendly. This project is a personal exploration of popular interior design styles, aiming to inspire and inform others who share a love for beautiful spaces.
            </p>
            <section className="max-w-2xl text-gray-600 mb-8">
                <h2 className="text-2xl font-bold mb-4">My Journey</h2>
                <p className="mb-4">
                    My fascination with design began at a young age, experimenting with colors, layouts, and textures in both digital and physical spaces. Over the years, I&apos;ve combined my technical skills with my creative vision to build projects that reflect my appreciation for harmony and detail.
                </p>
                <p>
                    Through this site, I hope to share insights, inspiration, and practical tips for anyone looking to enhance their environment. Whether you&apos;re a fellow developer, a design enthusiast, or simply curious, I invite you to explore and connect.
                </p>
            </section>
            <section className="text-gray-500 mt-8">
                <span>Let&apos;s connect: </span>
                <a href="mailto:hello@aestheticsmeadows.com" className="underline hover:text-gray-700">abhishalsharma2002@gmail.com</a>
            </section>
        </main>
    );
}
