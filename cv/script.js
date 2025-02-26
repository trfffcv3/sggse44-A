document.addEventListener("DOMContentLoaded", function () {
    const jobs = document.querySelectorAll(".job");

    function checkVisibility() {
        const triggerBottom = window.innerHeight * 0.85; // متى يبدأ الظهور

        jobs.forEach(job => {
            const jobTop = job.getBoundingClientRect().top;

            if (jobTop < triggerBottom) {
                job.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // تشغيله عند التحميل الأول
});