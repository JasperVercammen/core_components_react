import { Accordion, AccordionTab } from '@a-ui/react';
import { useState } from 'react';

export function AccordionExamples() {
  const [open, setOpen] = useState(false);
  return (
    <div className="u-margin">
      <h2>Accordions</h2>
      <div className="u-margin">
        <Accordion>
          <AccordionTab header="lorem ipsum">
            <div className="u-margin-xs">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at vehicula quam. Duis non tincidunt
                quam, vel fermentum turpis. Curabitur dictum, purus sollicitudin vestibulum vulputate, tellus sapien
                dictum tortor, in interdum massa quam at mi. In in accumsan urna. Curabitur a dictum turpis, vel
                pellentesque dolor. Integer tristique justo non rhoncus congue. Praesent et gravida arcu. Proin id
                efficitur sapien. Curabitur tincidunt, tellus non facilisis lobortis, libero eros scelerisque diam, nec
                convallis risus risus nec tortor. Ut venenatis ultricies finibus. Donec et justo a massa efficitur
                ullamcorper vitae sed nisl. Cras purus sem, dapibus vitae sem quis, malesuada condimentum quam. Vivamus
                gravida vel lorem aliquet varius. Vivamus tincidunt vehicula tortor nec facilisis. Nunc porta aliquet
                iaculis. Proin lobortis nulla nisi, nec vulputate mi dictum a.
              </p>
            </div>
          </AccordionTab>
          <AccordionTab header="Dog image">
            <div className="u-margin-xs">
              <img src="https://placedog.net/400/300?r" alt="A random dog" />
            </div>
          </AccordionTab>
          <AccordionTab header="Open uncontrolled" open={true}>
            <div className="u-margin-xs">
              <i>I stay open because I am uncontrolled.</i>
            </div>
          </AccordionTab>
          <AccordionTab header="I stay closed because I am uncontrolled" open={false}>
            I stay closed because I am uncontrolled.
          </AccordionTab>
        </Accordion>
      </div>
      <div className="u-margin">
        <Accordion type="open">
          <AccordionTab header="Controlled" open={open} onToggle={() => setOpen(!open)}>
            <div className="u-margin-xs">
              <i>I can be open or closed.</i>
            </div>
          </AccordionTab>
        </Accordion>
      </div>
    </div>
  );
}

export default AccordionExamples;
