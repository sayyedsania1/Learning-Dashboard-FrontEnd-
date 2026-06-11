import MotionWrapper from "./MotionWrapper";
import HeroTile from "./HeroTile";
import ActivityTile from "./ActivityTile";
import CourseCard from "./CourseCard";
import ProgressChart from "./ProgressChart";

export default function BentoGrid({ courses }) {
    return (
        <MotionWrapper>
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">

               {/*Left layout */}
                <div className="lg:col-span-2 flex flex-col gap-4">

                    <HeroTile courses={courses} />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {courses.map((course) => (
                            <CourseCard
                            key={course.id}
                            course={course}
                            />
                        ))}
                    </div>

                </div>

                {/*Right layout */}
                
                <div className="flex flex-col gap-4">

                    <ActivityTile />

                    <ProgressChart />

                </div>

            </section>
        </MotionWrapper>
    );
}