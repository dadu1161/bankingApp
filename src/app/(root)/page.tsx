import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
const Home = () => {
    const loogedIn = { firstName: 'Dagmawi', lastName: 'Teferi', email:'email baby@com'};
    
    return (
        <section className="home">
            <header className="home-content">
              
                <HeaderBox
                    type="greeting"
                    title="Welcome"
                    user={loogedIn.firstName}
                    subtext="Access and manage your account and transaction efficently"
                />
                
                <TotalBalanceBox 
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.35}
                />
            </header>
            
         {/* RECENT TRANSACTION */}
            <RightSideBar 
            user={loogedIn}
            transactions={[]}
            banks={[{currentBalance:123.50 }, {currentBalance:123.50}]}
            />
        </section> 
        
    )
}

export default Home;