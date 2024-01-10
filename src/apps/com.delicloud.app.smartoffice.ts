import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.delicloud.app.smartoffice',
  name: '得力e+',
  groups: [
    {
      key: 1,
      name: '[ChangeMe]规则名称-2024-01-10 11:04:09',
      desc: '[ChangeMe]本规则由GKD网页端审查工具生成',
      rules: [
        {
          activityIds: 'com.delicloud.app.smartoffice.mvp.ui.JiGuangSpalshActivity',
          matches: '[name="android.view.View"][index=2]',
        },
      ],
    },
  ],
});
