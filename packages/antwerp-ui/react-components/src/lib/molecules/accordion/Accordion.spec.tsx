/* eslint-disable @typescript-eslint/ban-ts-comment */
import jest from 'jest-mock';
import { Accordion } from './Accordion';
import { AccordionTab } from './AccordionTab';
import { fireEvent, render, screen } from '@testing-library/react';

describe('UI Components - Molecules - Accordion', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Accordion />);
    expect(baseElement).toBeTruthy();
  });

  it('should render a tab successfully', () => {
    const { baseElement } = render(
      <AccordionTab open={false} header="Hello">
        <p>World!</p>
      </AccordionTab>
    );
    expect(baseElement).toBeTruthy();
    expect(baseElement.getElementsByClassName('m-accordion__header')[0]).toBeTruthy();
    expect(baseElement.getElementsByClassName('m-accordion__header')[0].getAttribute('aria-expanded')).toEqual('false');
  });

  it('should render with children', () => {
    const { baseElement } = render(
      <Accordion>
        <AccordionTab header="Hello">
          <p>World!</p>
        </AccordionTab>
      </Accordion>
    );
    expect(baseElement.getElementsByClassName('m-accordion__tab')[0]).toBeTruthy();
    expect(baseElement.getElementsByClassName('m-accordion__header')[0]).toBeTruthy();
    expect(baseElement.getElementsByClassName('m-accordion__content')[0]).toBeTruthy();
  });

  it('should run onToggle when clicked', () => {
    const mockToggle = jest.fn();
    render(
      <AccordionTab open={true} onToggle={mockToggle} header="Hello">
        <p>World!</p>
      </AccordionTab>
    );
    const button = screen.getByRole('button');
    expect(button).toBeTruthy();
    fireEvent.click(button);
    setTimeout(() => {
      expect(mockToggle).toHaveBeenCalledTimes(1);
      fireEvent.click(button);
      expect(mockToggle).toHaveBeenCalledTimes(1);
    }, 500);
  });

  it('should run onToggle when clicked and closed', () => {
    const mockToggle = jest.fn();
    render(
      <AccordionTab open={false} onToggle={mockToggle} header="Hello">
        <p>World!</p>
      </AccordionTab>
    );
    const button = screen.getByRole('button');
    expect(button).toBeTruthy();
    fireEvent.click(button);
    expect(mockToggle).toHaveBeenCalledTimes(1);
  });

  it('should add --open class when clicked', () => {
    const { baseElement } = render(
      <AccordionTab header="Hello">
        <p>World!</p>
      </AccordionTab>
    );
    const button = screen.getByRole('button');
    expect(button).toBeTruthy();
    fireEvent.click(button);
    expect(baseElement.getElementsByClassName('m-accordion__content--open').length).toBe(1);
  });

  it('should add --animate class when clicked', () => {
    const { baseElement } = render(
      <AccordionTab
        header="Hello"
        open={true}
        onToggle={() => {
          return;
        }}
      >
        <p>World!</p>
      </AccordionTab>
    );
    const button = screen.getByRole('button');
    expect(button).toBeTruthy();
    fireEvent.click(button);
    expect(baseElement.getElementsByClassName('m-accordion__content--animate').length).toBe(1);
  });
});
