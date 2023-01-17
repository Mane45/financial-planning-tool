import React from "react";
import { Collapse } from "antd";
import "./Manual.css";

const { Panel } = Collapse;

function Manual() {
  return (
    <div>
      <Collapse accordion={true} className='collapse'>
        <Panel header="Manual 1" key="1">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            sequi, eum aliquam ipsam laudantium voluptatem dignissimos provident
            iure minus omnis nam sed! Nostrum doloribus reiciendis unde, neque
            qui repellat delectus.</p>
        </Panel>
        <Panel header="Manual 2" key="2">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            sequi, eum aliquam ipsam laudantium voluptatem dignissimos provident
            iure minus omnis nam sed! Nostrum doloribus reiciendis unde, neque
            qui repellat delectus.</p>
        </Panel>
        <Panel header="Manual 3" key="3">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            sequi, eum aliquam ipsam laudantium voluptatem dignissimos provident
            iure minus omnis nam sed! Nostrum doloribus reiciendis unde, neque
            qui repellat delectus.
          </p>
        </Panel>
        <Panel header="Manual 4" key="4">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            sequi, eum aliquam ipsam laudantium voluptatem dignissimos provident
            iure minus omnis nam sed! Nostrum doloribus reiciendis unde, neque
            qui repellat delectus.</p>
        </Panel>
        <Panel header="Manual 5" key="5">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            sequi, eum aliquam ipsam laudantium voluptatem dignissimos provident
            iure minus omnis nam sed! Nostrum doloribus reiciendis unde, neque
            qui repellat delectus.</p>
        </Panel>
        <Panel header="Manual 6" key="6">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            sequi, eum aliquam ipsam laudantium voluptatem dignissimos provident
            iure minus omnis nam sed! Nostrum doloribus reiciendis unde, neque
            qui repellat delectus.</p>
        </Panel>
      </Collapse>
    </div>
  );
}

export default Manual;
