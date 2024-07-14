
import policy from '../../assets/image/policies.png'

const Policies = () => {
    return (
        <div >
            <div><img className='w-full lg:h-72' src={policy} alt="" /></div>
            <div className='m-20 space-y-6'>
                <div>
                    <h1 className='text-blue-600 font-bold text-xl'>Attendance Policy </h1>
                    <p>Attendance does matter. Missing a lot of class can create huge holes that can lead to academic failure. The average school year in the United State is 170 days. A student who misses an average of 10 days a year beginning in pre-Kindergarten through twelfth grade will miss 140 days of school. That adds up to almost an entire school year that they have missed. Looking at it from that perspective, attendance becomes increasingly important and, without a solid attendance policy, it is virtually impossible to deal with. Tardies are equally important because a student who is late time after time is essentially playing catch up every day they are late.</p>
                </div>
                <div>
                    <h1 className='text-blue-600 font-bold text-xl'>Bullying Policy </h1>
                    <p>Schools have to make bullying prevention and education a top priority. This starts with a strong bullying policy. If you have not got an anti-bullying policy or it has not been updated in several years it is time to address it.</p>
                </div>
                <div>
                    <h1 className='text-blue-600 font-bold text-xl'>Cell Phone Policy </h1>
                    <p> Over the last 15 years, phones in the classroom have caused more and more problems. With that said, they can also be a valuable educational tool and, in a catastrophic situation, they can save lives. Schools must evaluate their cell phone policies and figure out what will work best for their setting. </p>
                </div>
                <div>
                    <h1 className='text-blue-600 font-bold text-xl'>Dress Code Policy </h1>
                    <p>There are so many distractions that a student can cause by how they dress. Like many of these policies, they need to be updated yearly, and the community in which the school is located can influence what is and is not appropriate. Last year a student came to school wearing bright lime green contact lenses. It was a major distraction for the other students and so we had to ask him to remove them. It was not something that we had dealt with before, but we adjusted and added it to our handbook for this year. </p>
                </div>
                <div>
                    <h1 className='text-blue-600 font-bold text-xl'>Fighting Policy </h1>
                    <p>Big consequences are the key to stopping fights from occurring on campus. Most students do not want to be suspended from school for a long period, and they especially do not want to deal with the police. Having a policy in your student handbook that deals with fighting with tough consequences will help deter many fights from occurring. </p>
                </div>
                <div>
                    <h1 className='text-blue-600 font-bold text-xl'>Student Discipline </h1>
                    <p>Students need to have a list of all the possible consequences if they make a poor choice. This list will also assist you in trying to figure out how to deal with a particular situation. Being fair is very important as you make discipline decisions, but many factors go into that situation. </p>
                </div>
            </div>
        </div>
    );
};

export default Policies;