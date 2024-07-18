import React from 'react';
import { shallow } from 'enzyme';
import NewMeetupForm from './NewMeetupForm';
import { useInfo } from '../../context/meetupContext';
import Card from '../ui/Card';

jest.mock('../../context/meetupContext', () => ({
  useInfo: jest.fn(),
}));

describe('<NewMeetupForm />', () => {
  let setCurrentDataMock, currentDataMock;

  beforeEach(() => {
    setCurrentDataMock = jest.fn();
    currentDataMock = [];
    useInfo.mockReturnValue({
      setCurrentData: setCurrentDataMock,
      currentData: currentDataMock,
    });
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<NewMeetupForm />);
    expect(wrapper.find(Card)).toHaveLength(1);
  });

  it('updates state on input change', () => {
    const wrapper = shallow(<NewMeetupForm />);
    wrapper.find('#title').simulate('change', { target: { value: 'New Title' } });
    wrapper.find('#image').simulate('change', { target: { value: 'http://example.com/image.jpg' } });
    wrapper.find('#address').simulate('change', { target: { value: '123 Main St' } });
    wrapper.find('#description').simulate('change', { target: { value: 'Description text' } });

    expect(wrapper.find('#title').prop('value')).toBe('New Title');
    expect(wrapper.find('#image').prop('value')).toBe('http://example.com/image.jpg');
    expect(wrapper.find('#address').prop('value')).toBe('123 Main St');
    expect(wrapper.find('#description').prop('value')).toBe('Description text');
  });

  it('calls setCurrentData on form submit', () => {
    const wrapper = shallow(<NewMeetupForm />);
    wrapper.find('#title').simulate('change', { target: { value: 'New Title' } });
    wrapper.find('#image').simulate('change', { target: { value: 'http://example.com/image.jpg' } });
    wrapper.find('#address').simulate('change', { target: { value: '123 Main St' } });
    wrapper.find('#description').simulate('change', { target: { value: 'Description text' } });

    wrapper.find('form').simulate('submit', { preventDefault: () => {} });

    expect(setCurrentDataMock).toHaveBeenCalledWith(expect.any(Function));
    const updateFunc = setCurrentDataMock.mock.calls[0][0];
    const newData = updateFunc([]);
    expect(newData).toEqual([
      {
        title: 'New Title',
        image: 'http://example.com/image.jpg',
        address: '123 Main St',
        description: 'Description text',
      },
    ]);
  });
});