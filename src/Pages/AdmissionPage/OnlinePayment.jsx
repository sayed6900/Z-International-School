import onlinePay from '../../assets/image/online-payments.jpg'

const OnlinePayment = () => {
    return (
        <div className='flex'>
        <img src={onlinePay} alt="" />
            <div className='text-center m-6'>
                <h1 className='font-bold text-2xl text-blue-700'>Z International School Online Payment</h1>
                <p>Helpline: 01722469999, +8809612225222</p>
                <p className='font-bold text-orange-700'>Time Limit for Payment : 7:00 AM to 5:00 PM</p>
                <button className='btn m-5 btn-primary'><a href="http://https://www.youtube.com/watch?v=5Hup7pZ3rUE"> Payment Tutorial </a></button>

                <button className='btn btn-secondary'>Payment Now</button>
            </div>
        </div>
    );
};

export default OnlinePayment;