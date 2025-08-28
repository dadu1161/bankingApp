import HeaderBox from "@/components/HeaderBox";


const Home =()=>{
    const loogedIn={firstName:'Dagmawi'}
    return (
        <section className="home">
            <div className="home-content">
            <HeaderBox
              type="greeting"
              title="Welcome"
              user={loogedIn.firstName}
              subtext="Access and manage your account and transaction efficently"
            />
                
                </div>

        </section>
    )
}

export default Home;