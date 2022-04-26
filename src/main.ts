// The MIT License (MIT)
//
// Copyright (c) 2018 Firebase
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

import { has, merge, random, get } from 'lodash';
import {
  wrap as wrapV1,
  WrappedScheduledFunction as WrappedScheduledFunctionV1,
  WrappedFunction as WrappedFunctionV1
} from './v1';
import {
  wrap as wrapV2,
  WrappedFunction as WrappedFunctionV2
} from './v2';

import {
  CloudFunction as CloudFunctionV1,
} from 'firebase-functions';

import {
  CloudFunction as CloudFunctionV2,
} from 'firebase-functions/v2';


/** Takes a cloud function to be tested, and returns a WrappedFunction which can be called in test code. */
export function wrap<T>(
  cloudFunction: CloudFunctionV1<T>|CloudFunctionV2<T>
): WrappedScheduledFunctionV1 | WrappedFunctionV1| WrappedFunctionV2 {
  if (cloudFunction.length === 1) {
    return wrapV2(cloudFunction as CloudFunctionV2<T>);
  }
  return wrapV1(cloudFunction as CloudFunctionV1<T>);
}
