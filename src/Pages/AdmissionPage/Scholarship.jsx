

const Scholarship = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold mt-10 text-blue-800 text-center">Scholarship Policy</h1>
            <div className="m-10 space-y-3">
                <h1 className="font-bold text-blue-500 text-2xl">Who May Apply?</h1>
                <p>The scholarship is open to students of all schools of Bangladesh and includes current students of AIS. Students applying for the scholarship must be between 11 – 14 years old on or before 1st of Sept of the academic year. Other required academic qualifications are as follows:</p>
                <ol className="list-decimal pl-14">
                    <li>Any student of ZIS obtaining grades of 90% or equivalent in 6 key subjects is awarded 50% tuition fee concession.</li>
                    <li>Any student of ZIS obtaining grades of 90% or equivalent in 8 key subjects is awarded 75% tuition fee concession.</li>
                    <li>Any student of ZIS obtaining grades of 90% or equivalent in 9 key subjects is awarded 100% tuition fee concession.</li>
                    <li>ZIS also has a scholarship grant policy for the MERITORIOUS and UNDERPRIVILEGED students of Bangladesh. School selects these students from various parts of Bangladesh through placement Assessments and interviews. School provides these students with full free accommodation, food and also bears all types of educational expenses</li>
                </ol>
            </div>
            <div className="m-10 space-y-3">
                    <h1 className="font-bold text-blue-500 text-2xl">How to Apply?</h1>
                    <p>Once the advertisement for scholarship is displayed on the website and on AIS official Facebook ID, application forms can be collected from our Admissions Office or downloaded from http://aisd.edu.bd/information/download/ scholarship.pdf . Candidates must attach a copy of the last two years of academic reports and documentation regarding any awards they may have received. Interested candidates then will be contacted by the AIS Admissions office with further information regarding scholarship information, examinations and interview dates</p>
            </div>
        </div>
    );
};

export default Scholarship;