import Vue from 'vue'
import { Message, Switch, Tooltip, Pagination, Table, TableColumn, Button, Card, Row, Col, Form, FormItem, Input, Container, Header, Aside, Main, Menu, Submenu, MenuItem, MenuItemGroup, Breadcrumb, BreadcrumbItem, Dialog, MessageBox, Tag, Tree, Select, Option, Cascader } from 'element-ui'

Vue.use(Button, Tag, MessageBox, Option, Cascader, Tree, Dialog, Select, Form, Pagination, Switch, Table, Tooltip, TableColumn, FormItem, Card, Row, Col, Input, Container, Header, Aside, Breadcrumb, BreadcrumbItem, Main, Menu, Submenu, MenuItem, MenuItemGroup)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox
