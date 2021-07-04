import Vue from 'vue'
import { Message, Button, Form, FormItem, Input } from 'element-ui'

Vue.use(Button, Form, FormItem, Input)

Vue.prototype.$message = Message
