import React from 'react';
import { message, Modal, Tooltip } from 'antd';
import { connect } from 'react-redux';
import Image from 'next/image';
import { ButtonBase, makeStyles, TextField } from '@material-ui/core';
import { getHomeLogin, getHomeLogout } from '@components/best-router/comp/service';
import { loginAction, logoutAction } from '@store/user/action';
import { USER_INFO } from '@store/user/types';
import MyLink from '../../my-link';

const useStyle = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 60,
    marginTop: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rightBlock: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    fontSize: '14px',
  },
  linkBtn: {
    color: '#262626',
    padding: theme.spacing(0, 1.25),
    '&:hover': {
      color: '#a20000',
    },
  },
  line: {
    height: 20,
    width: 1,
    background: '#dbdbdb',
  },
  textRoot: {
    margin: theme.spacing(0, 1.25),
    fontSize: '14px',
  },
  iconLink: {
    margin: theme.spacing(0, 1.25),
  },
  icon: {
    margin: theme.spacing(0, 1.25),
    width: 20,
    height: 20,
  },
  userInfo: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  userIcon: {
    width: 30,
    height: 30,
    overflow: 'hidden',
    borderRadius: 15,
  },
  userName: {
    margin: theme.spacing(0, 1),
  },
}));

interface HeadCenterProps {
  handleLogin?: typeof loginAction
  handleLogout?: typeof logoutAction
  userInfo?: USER_INFO
}

const HeadCenter:React.FC<HeadCenterProps> = (props) => {
  const { handleLogin, handleLogout, userInfo } = props;
  const classes = useStyle();
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  const handleSubmit = async () => {
    const res = await getHomeLogin();
    if (res) {
      if (handleLogin) {
        handleLogin({
          userName: res.userName,
          userIcon: res.userIcon,
          isLogin: true,
        });
      }
      message.success('???????????????');
    }
  };
  const handleCancel = () => {
    setVisible(false);
  };

  const handleOk = async () => {
    setConfirmLoading(true);
    await getHomeLogout();
    if (handleLogout) {
      handleLogout();
    }
    setConfirmLoading(false);
    message.success('??????????????????');
    handleCancel();
  };

  const showModal = () => {
    setVisible(true);
  };

  return (
    <div className={classes.root}>
      <MyLink href="/">
        <Image src="/img/logo.png" width={142} height={50} />
      </MyLink>
      <div className={classes.rightBlock}>
        {
          userInfo && userInfo.isLogin
            ? (
              <div className={classes.userInfo}>
                <div>????????????</div>
                <div className={classes.userIcon}>
                  <img src={userInfo.userIcon} alt="????????????" width={30} height={30} />
                </div>
                <div className={classes.userName}>{userInfo.userName}</div>
                <div className={classes.line} />
                <ButtonBase onClick={showModal}>
                  <div className={classes.linkBtn}>????????????</div>
                </ButtonBase>
              </div>
            )
            : (
              <ButtonBase onClick={handleSubmit}>
                <div className={classes.linkBtn}>??????</div>
                <div className={classes.line} />
                <div className={classes.linkBtn}>??????</div>
              </ButtonBase>
            )
        }
        <TextField classes={{ root: classes.textRoot }} label="????????????" placeholder="???????????????????????????" size="small" />
        <MyLink href="/" className={classes.iconLink}>
          <img className={classes.icon} src="/img/grzx.png" alt="????????????.png" />
        </MyLink>
        <Tooltip color="#fff" title={<img src="/img/smewm.png" alt="?????????????????????" width={74} height={74} />}>
          <MyLink href="/" className={classes.iconLink}>
            <img className={classes.icon} src="/img/ewm.png" alt="?????????.png" />
          </MyLink>
        </Tooltip>
        <MyLink href="/" className={classes.iconLink}>
          <img className={classes.icon} src="/img/gwc.png" alt="?????????.png" />
        </MyLink>
      </div>
      <Modal
        title="????????????"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okText="??????"
        cancelText="??????"
        width={300}
      >
        <p>?????????????????????</p>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state:USER_INFO): USER_INFO | object => ({
  userInfo: state,
});

export default connect(mapStateToProps, {
  handleLogin: loginAction,
  handleLogout: logoutAction,
})(HeadCenter);
