import React from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>WEBRN Packages</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Starter Pack</PricingCardPlan>
                <PricingCardCost>$99.99</PricingCardCost>
                <PricingCardLength>Per Hour</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>10 Nurses</PricingCardFeature>
                  <PricingCardFeature>$20,000 Max Budget</PricingCardFeature>
                  <PricingCardFeature>Retargeting Quality</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Gold Package</PricingCardPlan>
                <PricingCardCost>$199.99</PricingCardCost>
                <PricingCardLength>Per Hour</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>15 Nurses, 5 Techs</PricingCardFeature>
                  <PricingCardFeature>$30,000 Max Budget</PricingCardFeature>
                  <PricingCardFeature>Note: Charge Nurse Free</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Diamond Package</PricingCardPlan>
                <PricingCardCost>$299.99</PricingCardCost>
                <PricingCardLength>Per Hour</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>30 Nurses</PricingCardFeature>
                  <PricingCardFeature>$50,000 Max Budget</PricingCardFeature>
                  <PricingCardFeature>3 Charge Nurses</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;