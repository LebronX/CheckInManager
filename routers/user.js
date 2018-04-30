import Router from 'koa-router';
import { userCtrl } from '../controllers';

export const router = new Router();

// 管理员登录页面
// 页面 GET /user
router.get('/user/login', userCtrl.login);

// 获取修改密码页面
// GET /user/{user_id}/change_password
router.get('/user/:user_id/change_password', userCtrl.changePassword);

// 管理员权限 --------------

// 管理员登录页面 教师列表
router.get('/user', userCtrl.getAllTeachersList);

// 管理员手动添加教师的页面
router.get('/user/add_user');

// 选择某个教师进入课程列表
// 页面 GET /user/{user_id}/course
router.get('/user/:user_id/course', userCtrl.getAllCoursesByTeacherID);

// 管理员添加课程的页面
// 页面 GET /user/{user_id}/add_course
router.get('/user/:user_id/add_course')//, userCtrl.);

// 管理员选择某个教师进入课程列表再选择课程进入该课程的学生列表
// 页面 GET /user/{user_id}/course/{course_id}/course_member
router.get('/user/:user_id/course/:course_id/course_member', userCtrl.changePassword);

// 管理员手动添加课程学生的页面
// 页面 GET /user/{user_id}/course/{course_id}/add_course_member
router.get('/user/:user_id/course/:course_id/add_course_member', userCtrl.changePassword);