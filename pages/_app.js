import Header from "@/components/Header";
import "@/styles/globals.css";

const links = [
    { target: "task1", label: "Task 1" },
    { target: "task2", label: "Task 2" },
    { target: "task3", label: "Task 3" },
    { target: "task4", label: "Task 4" },
    { target: "task5", label: "Task 5" },
    { target: "task6", label: "Task 6" },
    { target: "task7", label: "Task 7" },
    { target: "task8", label: "Task 8" },
    { target: "task9", label: "Task 9" },
    { target: "task10", label: "Task 10" },
];

export default function App({ Component, pageProps }) {
    const handleLinkClick = (target) => {
        scroll.scrollTo(document.getElementById(target).offsetTop, {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
        });
    };

    return (
        <>
            <Header links={links} onLinkClick={handleLinkClick} />
            <Component links={links} onLinkClick={handleLinkClick} {...pageProps} />
        </>
    );
}
