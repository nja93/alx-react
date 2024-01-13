import React from "react";
import Notifications from "./Notifications";
import { shallow } from "enzyme";

describe('Notifications component', () => {
    it('renders NotificationItem elements', () => {
      const wrapper = shallow(<Notifications />);
       expect(wrapper.find('NotificationItem')).toHaveLength(3);
    });
  
    it('renders correct html win the first NotificationItem', () => {
      const wrapper = shallow(<Notifications />);
      const firstNotificationItem = wrapper.find('NotificationItem').first();
      expect(firstNotificationItem.prop('type')).toBe('default');
      expect(firstNotificationItem.prop('value')).toBe('New course available');
    });
  });