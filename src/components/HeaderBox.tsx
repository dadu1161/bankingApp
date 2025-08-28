const HeaderBox = ({ type="title", title, subtext, user }: HeaderBoxProps ) => {
    return (
    <div className='header-box'>
        <h1 className='header-box-title'>{title}
            {type==="greeting" && (
                <span className='text-bank-gradient'> {/* updated class */}
                    &nbsp;{user}
                </span>
            )}
        </h1>
        <p className='header-box-subtext'>Access and manage your account and transactions efficiently</p>
    </div>
  )
}

export default HeaderBox
