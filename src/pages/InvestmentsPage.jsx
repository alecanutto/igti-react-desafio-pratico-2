import React, { useState } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Investments from '../components/Investments';

import { allInvestments } from '../data/investments';
import SelectOption from '../components/SelectOption';

export default function InvestmentsPage() {
  const [investimentFilter, setInvestimentFilter] = useState('');

  function handleInvestmentFilterChange(newInvestimentFilter) {
    setInvestimentFilter(newInvestimentFilter);
  }

  const filteredInvestments = investimentFilter
    ? allInvestments.investments.filter(({ id }) => id === investimentFilter)
    : allInvestments.investments;

  return (
    <>
      <Header>react-investments v1.01</Header>
      <Main>
        <SelectOption onSelectChange={handleInvestmentFilterChange}>
          {allInvestments.investments}
        </SelectOption>
        {filteredInvestments.map(({ id, description }) => {
          const reports = allInvestments.reports.filter(
            report => report.investmentId === id
          );
          return (
            <Investments key={id} description={description}>
              {reports}
            </Investments>
          );
        })}
      </Main>
    </>
  );
}
