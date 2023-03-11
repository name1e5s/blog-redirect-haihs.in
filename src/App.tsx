import React from 'react';
import { Stack, Text, Link, FontWeights, IStackTokens, IStackStyles, ITextStyles, ProgressIndicator, IProgressIndicatorStyles } from '@fluentui/react';
import logo from './logo.svg';
import './App.css';

const boldStyle: Partial<ITextStyles> = { root: { fontWeight: FontWeights.semibold } };
const stackTokens: IStackTokens = { childrenGap: 15 };
const stackStyles: Partial<IStackStyles> = {
  root: {
    width: '70%',
    margin: '0 auto',
    textAlign: 'center',
    color: '#605e5c',
  },
};
const progressIndicatorStyles: Partial<IProgressIndicatorStyles> = {
  root: {
    width: '100%',
    textAlign: 'left',
  }
};

export const App: React.FunctionComponent = () => {
  return (
    <Stack horizontalAlign="center" verticalAlign="center" verticalFill styles={stackStyles} tokens={stackTokens}>
      <ProgressIndicator styles={progressIndicatorStyles} label="Redirecting..." description="Site moves to blog.hai-hs.in" />
    </Stack>
  );
};
