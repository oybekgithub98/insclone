import React from 'react';
import classes from './Sidebar.module.css';
import { useStateValue } from '../../StateProvider';

const Sidebar = () => {

    const [user] = useStateValue();

    return (
        <div className={classes.sidebar}>
            <div className={classes.sidebar__wrapper}>
                <div className={classes.sidebar__header}>
                    <img className={classes.avatar__svg} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQamYpU-toEkxiPMa5f4Eqx-pYFB59YCpvwug&usqp=CAU" alt="" />
                    <div className={classes.header_text}>
                        <h5>{`${user?.user.currentUser?.email.slice(0, user?.user.currentUser.email.search("@"))}`}</h5>
                    </div>
                    <p>transform</p>
                </div>

                <div className={classes.members}>
                    <p>Recommendations for Members</p>
                    <p>view all</p>
                </div>

                <div className={classes.sidebar__body}>
                    <div className={classes.sidebar__contact}>
                        <img className={classes.contact__avatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQamYpU-toEkxiPMa5f4Eqx-pYFB59YCpvwug&usqp=CAU" alt="" />
                        <div className={classes.contact__text}>
                            <h5>sherbek3619</h5>
                            <p>mamatov.chingizbek님 외</p>
                        </div>
                        <p>follow</p>
                    </div>
                    <div className={classes.sidebar__contact}>
                        <img className={classes.contact__avatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQamYpU-toEkxiPMa5f4Eqx-pYFB59YCpvwug&usqp=CAU" alt="" />
                        <div className={classes.contact__text}>
                            <h5>madrahimov_abdulla</h5>
                            <p>mamatov.chingizbe</p>
                        </div>
                        <p>follow</p>
                    </div>
                    <div className={classes.sidebar__contact}>
                        <img className={classes.contact__avatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQamYpU-toEkxiPMa5f4Eqx-pYFB59YCpvwug&usqp=CAU" alt="" />
                        <div className={classes.contact__text}>
                            <h5>asadbek010820</h5>
                            <p>muzaffar_1509님 외 5</p>
                        </div>
                        <p>follow</p>
                    </div>
                    <div className={classes.sidebar__contact}>
                        <img className={classes.contact__avatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQamYpU-toEkxiPMa5f4Eqx-pYFB59YCpvwug&usqp=CAU" alt="" />
                        <div className={classes.contact__text}>
                            <h5>atqiyobey996</h5>
                            <p>회원님을 팔로우합니다</p>
                        </div>
                        <p>follow</p>
                    </div>
                    <div className={classes.sidebar__contact}>
                        <img className={classes.contact__avatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQamYpU-toEkxiPMa5f4Eqx-pYFB59YCpvwug&usqp=CAU" alt="" />
                        <div className={classes.contact__text}>
                            <h5>furqatjon5034</h5>
                            <p>arabboyevjavlonbek</p>
                        </div>
                        <p>follow</p>
                    </div>
                    <p>
                        IntroduceHelppublic relations centerAPIJobsprivacy
                         policytermslocationpopular accounthashtaglanguage Korean
                    </p>
                    <div className={classes.copyRight}>© 2021 INSTAGRAM FROM FACEBOOK</div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
