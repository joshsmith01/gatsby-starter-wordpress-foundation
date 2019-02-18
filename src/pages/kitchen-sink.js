import React from 'react'
import { Link } from "gatsby"
import Layout from '../components/Layout'
import Card from '../components/containers/Card'
import Callout from '../components/containers/Callout'
import Heading from '../components/typography/Heading'
import Badge from '../components/cues/Badge'
import Breadcrumbs from '../components/cues/Breadcrumbs'
import Button from '../components/controls/Button'
import ButtonGroup from '../components/controls/ButtonGroup'
import CloseButton from '../components/controls/CloseButton'

const KitchenSink = () => (
  <Layout>
    <div className="grid-container">
      <div className="grid-x grid-margin-x">
        <div className="cell small-12">
          <Heading tag={1}>Kitchen Sink</Heading>
          <p>Everything but.</p>
        </div>
        <div className="cell small-12">
          <hr />
        </div>
        <div className="cell small-12 medium-6">
          <Heading tag={2}>Callout</Heading>
          <Callout>
            <Heading tag={5}>This is a callout</Heading>
            <p>It has an easy to override visual style, and is appropriately subdued.</p>
            <Link to="kitchen-sink">It&apos;s dangerous to go alone, take this.</Link>
          </Callout>
          <Callout type="primary">
            <Heading tag={5}>This is a callout</Heading>
            <p>It has an easy to override visual style, and is appropriately subdued.</p>
            <Link to="kitchen-sink">It&apos;s dangerous to go alone, take this.</Link>
          </Callout>
          <Callout type="secondary">
            <Heading tag={5}>This is a callout</Heading>
            <p>It has an easy to override visual style, and is appropriately subdued.</p>
            <Link to="kitchen-sink">It&apos;s dangerous to go alone, take this.</Link>
          </Callout>
          <Callout type="success">
            <Heading tag={5}>This is a callout</Heading>
            <p>It has an easy to override visual style, and is appropriately subdued.</p>
            <Link to="kitchen-sink">It&apos;s dangerous to go alone, take this.</Link>
          </Callout>
          <Callout type="warning">
            <Heading tag={5}>This is a callout</Heading>
            <p>It has an easy to override visual style, and is appropriately subdued.</p>
            <Link to="kitchen-sink">It&apos;s dangerous to go alone, take this.</Link>
          </Callout>
          <Callout type="alert">
            <Heading tag={5}>This is a callout</Heading>
            <p>It has an easy to override visual style, and is appropriately subdued.</p>
            <Link to="kitchen-sink">It&apos;s dangerous to go alone, take this.</Link>
          </Callout>
        </div>

        <div className="cell small-12">
          <hr />
          <Heading tag={2}>Typography: Headings</Heading>
          <Heading tag={1}>h1. This is a very large header.</Heading>
          <Heading tag={2}>h2. This is a large header.</Heading>

          <Heading tag={3}>h3. This is a medium header.</Heading>

          <Heading tag={4}>h4. This is a moderate header.</Heading>

          <Heading tag={5}>h5. This is a small header.</Heading>

          <Heading tag={6}>h6. This is a tiny header.</Heading>
        </div>
        <div className="cell small-12">
          <p>HTML in the component.</p>
          <Heading rank={3} text={["Foundation for Sites ", <small>version 6.5.3</small>]} />
        </div>




      </div>
      <hr />
      <Heading tag={2}>Cards</Heading>
      <div className="grid-x grid-margin-x">
        <div className="cell small-12 medium-4">
          <Card />
        </div>
        <div className="cell small-12 medium-4">
          <Card />
        </div>
        <div className="cell small-12 medium-4">
          <Card />
        </div>
      </div>

      <hr />
      <Heading tag={2}>Badges</Heading>
      <div className="grid-x grid-margin-x">
        <div className="cell small-12 medium-4">
          <Badge type="primary">1</Badge>
          <Badge type="secondary">2</Badge>
          <Badge type="success">3</Badge>
          <Badge type="warning">A</Badge>
          <Badge type="alert">B</Badge>
        </div>
      </div>


      <hr />
      <Heading tag={2}>Breadcrumbs</Heading>
      <div className="grid-x grid-margin-x">
        <div className="cell small-12 medium-4">
          <Breadcrumbs />
        </div>
      </div>

      <hr />
      <Heading tag={2}>Button</Heading>
      <div className="grid-x grid-margin-x">
        <div className="cell small-12 ">
          <Button>
            Learn More
          </Button>

          <Button>
            View All Features
          </Button>

          <Button type='success'>
            Save
          </Button>
          <Button type='alert'>
            Delete
          </Button>
          <Button type='tiny'>
            So Tiny
          </Button>
          <Button type='small'>
            So Small
          </Button>
          <Button type='large'>
            So Large
          </Button>
          <Button type='warning'>
            Warning
          </Button>
          <Button type='expanded'>
            Such Expanse
          </Button>
        </div>
      </div>

      <hr />
      <Heading tag={2}>Button Group</Heading>
      <ButtonGroup>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup type='small'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup type='secondary'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup type='expanded '>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup type='expanded secondary'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <hr />
      <Heading tag={2}>Close Button</Heading>
      <div className="callout" data-closable>
        <p>You can so totally close this!</p>

        <CloseButton tag='button' ariaLabel='Dismiss alert' type='button'><span aria-hidden="true">&times;</span></CloseButton>
      </div>
    </div>
  </Layout>
)

export default KitchenSink
