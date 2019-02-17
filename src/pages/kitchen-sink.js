import React from 'react'
import { Link } from "gatsby"
import Layout from '../components/Layout'
import Card from '../components/containers/Card'
import Callout from '../components/containers/Callout'
import Heading from '../components/typography/Heading'

const KitchenSink = () => (
  <Layout>
    <div className="grid-container">
      <div className="grid-x grid-margin-x">
        <div className="cell small-12">
          <Heading text="Kitchen Sink" tag={1} />
          <p>Everything but.</p>
        </div>
        <div className="cell small-12">
          <button type="button" className="success button">
            Save
          </button>
        </div>
        <div className="cell small-12 medium-6">
          <Callout type="success">
            <Heading text="This is a callout" tag={5} />
            <p>It has an easy to override visual style, and is appropriately subdued.</p>
            <Link to="kitchen-sink">It&apos;s dangerous to go alone, take this.</Link>
          </Callout>
        </div>
        <div className="cell small-12">
          <Heading rank={1} text="h1. This is a very large header." />
        </div>
        <div className="cell small-12">
          <Heading rank={2} text="h2. This is a large header." />
        </div>
        <div className="cell small-12">
          <Heading rank={3} text="h3. This is a medium header." />
        </div>
        <div className="cell small-12">
          <Heading rank={4} text="h4. This is a moderate header." />
        </div>
        <div className="cell small-12">
          <Heading rank={5} text="h5. This is a small header." />
        </div>
        <div className="cell small-12">
          <Heading rank={6} text="h6. This is a tiny header." />
        </div>
        <div className="cell small-12">
          <p>HTML in the component.</p>
          <Heading rank={3} text={["Foundation for Sites ", <small>version 6.5.3</small>]} />
        </div>
        <div className="cell small-12 medium-4">
          <Card />
        </div>
        <div className="cell small-12 medium-4">
          <Card />
        </div>
        <div className="cell small-12 medium-4">
          <Card />
        </div>
        <hr />
        <br />

      </div>
    </div>
  </Layout>
)

export default KitchenSink
