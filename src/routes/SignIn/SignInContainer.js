import React from 'react'
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router'
import { connect, } from 'react-redux'
import store from 'store2';
import {actions} from './SignInModule'
import { Form, Icon, Input, Button, Checkbox ,message} from 'antd';
const FormItem = Form.Item;

import './SigninContainer.css'


class LoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.actions.handleSubmit(values, (res)=>{
                    message.success(res.msg);

                    store.session({apps:{user:res.data}})
                    browserHistory.push({
                        pathname: '/',
                        state: { username:  res.data.username}
                    })
                },(res)=>{
                    message.error(res.msg);
                })
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const { actions } = this.props;
        return (
            <Form id="login-form" onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: '请输入用户名!' }],
                    })(
                        <Input addonBefore={<Icon type="user" />} placeholder="用户名" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [
                            { required: true, message: '请输入密码!' },
                           ],
                    })
                    (<Input addonBefore={<Icon type="lock" />} type="password" placeholder="密码" />)}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot">忘记密码</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                    Or <a>现在注册!</a>
                </FormItem>
            </Form>
        );
    }
}

const Signin = Form.create()(LoginForm);


const mapStateToProps = (state) => {
    const {
        info: info
    } = state['SignIn']['user'] || {};
    return{
        user:{
            info:info
        }
    }
};

//合并 Action
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(Signin)
