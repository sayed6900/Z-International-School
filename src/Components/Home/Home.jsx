import AboutUs from "./AboutUs";
import AgeSpisific from "./AgeSpisific";
import Banner from "./Banner";
import ExamRemainder from "./ExamRemainder";
import History from "./History";
import NewsMedia from "./NewsMedia";
import SchoolTiming from "./SchoolTiming";


const Home = () => {
    return (
        <div >
        <Banner></Banner>
        <AboutUs></AboutUs>
        <History></History>
        <AgeSpisific></AgeSpisific>
        <SchoolTiming></SchoolTiming>
        <NewsMedia></NewsMedia>
       
          <div className="fixed bottom-4 right-4">
          <ExamRemainder></ExamRemainder>
          </div>
        </div>
    );
};

export default Home;