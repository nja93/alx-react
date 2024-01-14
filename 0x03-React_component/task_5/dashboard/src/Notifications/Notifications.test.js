import "./Notifications.css"
import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("Notification component tests", () => {
  it("renders Notification component without crashing", () => {
    const notification = shallow(<Notifications />);

    expect(notification).toBeDefined();
  });

  it("renders ul", () => {
    const notification = shallow(<Notifications />);

    expect(notification.find("ul")).toBeDefined();
  });

  it("renders three list items", () => {
    const notification = shallow(<Notifications />);

    expect(notification.find("li")).toHaveLength(3);
  });

  it("renders correct text", () => {
    const notification = shallow(<Notifications />);

    expect(notification.find("p").text()).toBe("Here is the list of notifications");
  });
});

it("displays menu item when displayDrawer is false", () => {
  const wrapper = shallow(<Notifications displayDrawer={false} />);

  expect(wrapper.find("div.menuItem").exists()).toBe(true);
  expect(wrapper.find("div.menuItem").html()).toEqual('<div class="menuItem"><p>Your notifications</p></div>');
});

it("does not display notifications when displayDrawer is false", () => {
  const wrapper = shallow(<Notifications displayDrawer={false} />);

  expect(wrapper.find("div.Notifications").exists()).toBe(false);
});

it("does not display menuItem when displayDrawer is true", () => {
  const wrapper = shallow(<Notifications displayDrawer={true} />);

  expect(wrapper.find("div.menuItem").exists()).toBe(true);
});

it("displays Notifications when displayDrawer is true", () => {
  const wrapper = shallow(<Notifications displayDrawer={true} />);

  expect(wrapper.find("div.Notifications").exists()).toBe(true);
});
});

describe("Testing <Notification displayDrawer={true} listNotifications={[...]}/> ", () => {
  let wrapper;
  const listNotifications = [
    {id: 1, value: "New course available", type: "default"},
    {id: 2, value: "New resume available", type: "urgent"},
    {id: 3, html: {__html: getLatestNotification()}, type: "urgent"},
  ];

  beforeEach(() => {
    wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
  });

  it("verify that when you pass a list of notifications, the component renders it correctly and with the right number of NotificationItem", () => {
    expect(wrapper.find("NotificationItem")).toHaveLength(3);
    expect(wrapper.find("NotificationItem").first().props().value).toEqual('New course available');
  });
});

describe("Testing markAsRead method in the notification class Component", () => {
  it("Check that when calling the function markAsRead on an instance of the component, the spy is being called with the right message", () => {
    const listNotifications = [
      {id: 1, value: "New course available", type: "default"},
      {id: 2, value: "New resume available", type: "urgent"},
      {id: 3, html: {__html: getLatestNotification()}, type: "urgent"},
    ];
    console.log = jest.fn();
    const wrapper = mount(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
    const mock = jest.spyOn(console, 'log');
    const noti = wrapper.find('li').first();
    noti.simulate('click');
    expect(mock).toBeCalledWith("Notification 1 has been marked as read");
    mock.mockRestore();
  });

it("verify that when updating the props of the component with a longer list, the component does rerender", () => {
  const listNotifications = [
    {id: 1, value: "New course available", type: "default"},
    {id: 2, value: "New resume available", type: "urgent"},
    {id: 3, html: {__html: getLatestNotification()}, type: "urgent"},
  ];
  const listNotifications2 = [
    {id: 1, value: "New course available", type: "default"},
    {id: 2, value: "New course available2", type: "default"},
    {id: 3, value: "New resume available", type: "urgent"},
    {id: 4, html: {__html: getLatestNotification()}, type: "urgent"},
  ];
  console.log = jest.fn();
  const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
  wrapper.setProps({listNotifications: listNotifications2});
  expect(wrapper.find("NotificationItem").at(1).props().value).toEqual("New course available2");
  expect(wrapper.find("NotificationItem").length).toBe(4);
});
});