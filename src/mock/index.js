import Mock from 'mockjs'

export default {
  mockData () {
    const BASE_PATH = process.env.BASE_URL.endsWith('/')
      ? process.env.BASE_URL.substr(0, process.env.BASE_URL.length - 1)
      : process.env.BASE_URL
    Mock.mock(BASE_PATH + '/api/user/login', {
      'code': 1,
      'token': 'fdsjfhjkdshfkldsajfjasdfbjsdkfhsdajfj',
      'result': {
        'id': '100001',
        'name': 'Coco',
        'roles': ['admin']
      }
    })
    Mock.mock(BASE_PATH + '/api/user/register', {
      'code': 1
    })
    Mock.mock(BASE_PATH + '/api/user/info', {
      'code': 1,
      'id': '100001',
      'name': 'Coco',
      'roles': ['admin'],
      'permissions': [
        {
          // 一个页面一个对象，以name确定（对应静态路由表里面的name）
          name: 'index'
        }, {
          name: '监测信息'
        }, {
          name: '实时监测'
        }, {
          name: '地图信息'
        }, {
          name: '用量统计'
        }, {
          name: '日用量'
        }, {
          name: '月用量'
        }, {
          name: '时段用量'
        }, {
          name: '压力分析'
        }, {
          name: '日压力'
        }, {
          name: '月压力'
        }, {
          name: '信息查询'
        }, {
          name: '历史数据'
        }, {
          name: '通信日志'
        }, {
          name: '告警信息'
        }, {
          name: '流量分析'
        }, {
          name: '配表合理性'
        }, {
          name: '信息管理'
        }, {
          name: '设备信息'
        }, {
          name: '远程配置'
        }
      ]
    })
    // Mock.mock(BASE_PATH + '/api/user/info', {
    //   'code': 1,
    //   'id': '100001',
    //   'name': 'Coco',
    //   'roles': ['admin'],
    //   'permissions': [
    //     { name: 'index' },
    //     { name: 'table' },
    //     { name: 'formsBase' },
    //     { name: 'formsEdit' },
    //     { name: 'charts' },
    //     { name: 'errorDemo403' },
    //     { name: 'errorDemo404' },
    //     { name: 'errorDemo500' },
    //     { name: 'drag' },
    //     { name: 'userPassword' },
    //     { name: 'userPermissions' },
    //     { name: 'about' }
    //   ]
    // })
    Mock.mock('/api/user/changePassword', {
      'code': 1,
      'token': 'fdsjfhjkdshfkldsajfjasdfbjsdkfhsdajfj'
    })
    Mock.mock('/api/user/query', {
      'code': 1,
      'data|30-60': [
        {
          'name|1': [Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname'), Mock.mock('@cname')],
          'date|1': [Mock.mock('@date("yyyy-MM-dd")'), Mock.mock('@date("yyyy-MM-dd")'), Mock.mock('@date("yyyy-MM-dd")')],
          'address|1': [Mock.mock('@county(true)'), Mock.mock('@county(true)'), Mock.mock('@county(true)')]
        }
      ]
    })
    Mock.mock(BASE_PATH + '/api/user/permissions', {
      'code': 1,
      'permissions': {
        users: [
          {
            id: 1,
            name: '张三',
            roleIds: [1, 3]
          }, {
            id: 2,
            name: '李四',
            roleIds: [2, 3]
          }, {
            id: 3,
            name: '王五',
            roleIds: [3]
          }
        ],
        roles: [
          {
            id: 1,
            name: '管理员',
            pageIds: [1, 2],
            directiveIds: [1, 2]
          }, {
            id: 2,
            name: '普通用户',
            pageIds: [1, 2],
            directiveIds: [1]
          }, {
            id: 3,
            name: '登录用户',
            pageIds: [1],
            directiveIds: []
          }
        ],
        pages: [
          {
            id: 1,
            name: '表格',
            path: '/tables'
          }, {
            id: 2,
            name: '图表',
            path: '/charts'
          }
        ],
        directive: [
          {
            id: 1,
            name: 'modify',
            pageId: 1
          }, {
            id: 2,
            name: 'delete',
            pageId: 1
          }
        ]
      }
    })
  }
}
