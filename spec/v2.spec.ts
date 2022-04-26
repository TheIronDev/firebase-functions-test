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

import {expect} from 'chai';

import {
  createMockCloudEvent,
  wrapV2,
} from '../src/v2';

import {
  CloudFunction, CloudEvent, alerts, pubsub, storage, eventarc
} from 'firebase-functions/v2';

describe('v2', () => {
  describe('#wrapV2', () => {
    const handler = (cloudEvent) => ({cloudEvent});

    describe('alerts', () => {
      describe('alerts.onAlertPublished()', () => {
        it('should update CloudEvent appropriately', () => {
          const cloudFn = alerts.onAlertPublished('alertType', handler);
          const cloudFnWrap = wrapV2(cloudFn);
          const cloudEvent = createMockCloudEvent(cloudFn);
          expect(cloudFnWrap(cloudEvent).cloudEvent).equal(cloudEvent);
        });
      });
      describe('alerts.crashlytics.onNewAnrIssuePublished()', () => {
        it('should update CloudEvent appropriately', () => {
          const cloudFn = alerts.crashlytics.onNewAnrIssuePublished(handler);
          const cloudFnWrap = wrapV2(cloudFn);
          const cloudEvent = createMockCloudEvent(cloudFn);
          expect(cloudFnWrap(cloudEvent).cloudEvent).equal(cloudEvent);
        });
      });
      describe('alerts.crashlytics.onNewFatalIssuePublished()', () => {
        it('should update CloudEvent appropriately', () => {
          const cloudFn = alerts.crashlytics.onNewFatalIssuePublished(handler);
          const cloudFnWrap = wrapV2(cloudFn);
          const cloudEvent = createMockCloudEvent(cloudFn);
          expect(cloudFnWrap(cloudEvent).cloudEvent).equal(cloudEvent);
        });
      });
      describe('alerts.crashlytics.onNewNonfatalIssuePublished()', () => {
        it('should update CloudEvent appropriately', () => {
          const cloudFn = alerts.crashlytics.onNewNonfatalIssuePublished(handler);
          const cloudFnWrap = wrapV2(cloudFn);
          const cloudEvent = createMockCloudEvent(cloudFn);
          expect(cloudFnWrap(cloudEvent).cloudEvent).equal(cloudEvent);
        });
      });
      describe('alerts.crashlytics.onRegressionAlertPublished()', () => {
        it('should update CloudEvent appropriately', () => {
          const cloudFn = alerts.crashlytics.onRegressionAlertPublished(handler);
          const cloudFnWrap = wrapV2(cloudFn);
          const cloudEvent = createMockCloudEvent(cloudFn);
          expect(cloudFnWrap(cloudEvent).cloudEvent).equal(cloudEvent);
        });
      });
      describe('alerts.crashlytics.onStabilityDigestPublished()', () => {
        it('should update CloudEvent appropriately', () => {
          const cloudFn = alerts.crashlytics.onStabilityDigestPublished(handler);
          const cloudFnWrap = wrapV2(cloudFn);
          const cloudEvent = createMockCloudEvent(cloudFn);
          expect(cloudFnWrap(cloudEvent).cloudEvent).equal(cloudEvent);
        });
      });
      describe('alerts.crashlytics.onVelocityAlertPublished()', () => {
        it('should update CloudEvent appropriately', () => {
          const cloudFn = alerts.crashlytics.onVelocityAlertPublished(handler);
          const cloudFnWrap = wrapV2(cloudFn);
          const cloudEvent = createMockCloudEvent(cloudFn);
          expect(cloudFnWrap(cloudEvent).cloudEvent).equal(cloudEvent);
        });
      });
      describe('alerts.appDistribution.onNewTesterIosDevicePublished()', () => {
        it('should update CloudEvent appropriately', () => {
          const cloudFn = alerts.appDistribution.onNewTesterIosDevicePublished(handler);
          const cloudFnWrap = wrapV2(cloudFn);
          const cloudEvent = createMockCloudEvent(cloudFn);
          expect(cloudFnWrap(cloudEvent).cloudEvent).equal(cloudEvent);
        });
      });
      describe('alerts.billing.onPlanAutomatedUpdatePublished()', () => {
        it('should update CloudEvent appropriately', () => {
          const cloudFn = alerts.billing.onPlanAutomatedUpdatePublished(handler);
          const cloudFnWrap = wrapV2(cloudFn);
          const cloudEvent = createMockCloudEvent(cloudFn);
          expect(cloudFnWrap(cloudEvent).cloudEvent).equal(cloudEvent);
        });
      });
      describe('alerts.billing.onPlanUpdatePublished()', () => {
        it('should update CloudEvent appropriately', () => {
          const cloudFn = alerts.billing.onPlanUpdatePublished(handler);
          const cloudFnWrap = wrapV2(cloudFn);
          const cloudEvent = createMockCloudEvent(cloudFn);
          expect(cloudFnWrap(cloudEvent).cloudEvent).equal(cloudEvent);
        });
      });
    });

    describe('eventarc', () => {
      // Not published yet
      describe('eventarc.onCustomEventPublished()', () => {
        it('should update CloudEvent appropriately', () => {
          const eventType = 'EVENT_TYPE';
          const cloudFn = eventarc.onCustomEventPublished(eventType, handler);
          const cloudFnWrap = wrapV2(cloudFn);
          const cloudEvent = createMockCloudEvent(cloudFn);
          expect(cloudFnWrap(cloudEvent).cloudEvent).equal(cloudEvent);
          expect(cloudFnWrap(cloudEvent).cloudEvent.type).equal(eventType);
        });
      });
    });

    describe('storage', () => {
      describe('storage.onObjectArchived()', () => {
        it('should update CloudEvent appropriately', () => {
          const cloudFn = storage.onObjectArchived('bucket', handler);
          const cloudFnWrap = wrapV2(cloudFn);
          const cloudEvent = createMockCloudEvent(cloudFn);
          expect(cloudFnWrap(cloudEvent).cloudEvent).equal(cloudEvent);
        });
      });
      describe('storage.onObjectDeleted()', () => {
        it('should update CloudEvent appropriately', () => {
          const cloudFn = storage.onObjectDeleted('bucket', handler);
          const cloudFnWrap = wrapV2(cloudFn);
          const cloudEvent = createMockCloudEvent(cloudFn);
          expect(cloudFnWrap(cloudEvent).cloudEvent).equal(cloudEvent);
        });
      });
      describe('storage.onObjectFinalized()', () => {
        it('should update CloudEvent appropriately', () => {
          const cloudFn = storage.onObjectFinalized('bucket', handler);
          const cloudFnWrap = wrapV2(cloudFn);
          const cloudEvent = createMockCloudEvent(cloudFn);
          expect(cloudFnWrap(cloudEvent).cloudEvent).equal(cloudEvent);
        });
      });
      describe('storage.onObjectMetadataUpdated()', () => {
        it('should update CloudEvent appropriately', () => {
          const cloudFn = storage.onObjectMetadataUpdated('bucket', handler);
          const cloudFnWrap = wrapV2(cloudFn);
          const cloudEvent = createMockCloudEvent(cloudFn);
          expect(cloudFnWrap(cloudEvent).cloudEvent).equal(cloudEvent);
        });
      });
    });

    describe('pubsub', () => {
      describe('pubsub.onMessagePublished()', () => {
        it('should update CloudEvent appropriately', () => {
          const data = {
            message: {
              json: '{"hello": world}'
            },
            subscription: 'subscription'
          };
          const cloudFn = pubsub.onMessagePublished('topic', handler);
          const cloudFnWrap = wrapV2(cloudFn);
          const cloudEvent =
            createMockCloudEvent(cloudFn, {data});

          expect(cloudFnWrap(cloudEvent).cloudEvent).equal(cloudEvent);
        });
      });
    });

    describe('callable functions', () => {
      it('should invoke the function with the supplied cloudEvent', () => {
        const cloudFunction = (input) => input;
        cloudFunction.run = (cloudEvent: CloudEvent) => ({cloudEvent});
        cloudFunction.__endpoint = {
          platform: 'gcfv2',
          labels: {},
          callableTrigger: {},
          concurrency: 20,
          minInstances: 3,
          region: ['us-west1', 'us-central1'],
        };
        const wrappedCF = wrapV2(cloudFunction as CloudFunction<any>);
        const mockCloudEvent = createMockCloudEvent(cloudFunction);
        expect(wrappedCF(mockCloudEvent).cloudEvent).to.equal(mockCloudEvent);
      });
    });
  });

  describe('#createMockCloudEvent', () => {
    describe('alerts.billing.onPlanAutomatedUpdatePublished()', () => {
      it('should create CloudEvent with appropriate fields', () => {
        const cloudFn = alerts.billing.onPlanAutomatedUpdatePublished(() => {
        });
        const cloudEvent =
          createMockCloudEvent(cloudFn);

        expect(cloudEvent.type).equal(
          'google.firebase.firebasealerts.alerts.v1.published');
        expect(cloudEvent.source).equal(
          '//firebasealerts.googleapis.com/projects/__PROJECT_ID__');
        expect(cloudEvent.subject).equal(undefined);
      });
    });
    describe('storage.onObjectArchived', () => {
      it('should create CloudEvent with appropriate fields', () => {
        const bucketName = 'bucket_name';
        const cloudFn = storage.onObjectArchived(bucketName, () => {
        });
        const cloudEvent =
          createMockCloudEvent(cloudFn);

        expect(cloudEvent.type).equal(
          'google.cloud.storage.object.v1.archived');
        expect(cloudEvent.source).equal(
          `//storage.googleapis.com/projects/_/buckets/${bucketName}`);
        expect(cloudEvent.subject).equal('objects/__STORAGE_FILENAME__');
      });
    });
    describe('pubsub.onMessagePublished()', () => {
      it('should create CloudEvent with appropriate fields', () => {
        const data = {
          message: {
            json: '{"hello": world}'
          },
          subscription: 'subscription'
        };
        const cloudFn = pubsub.onMessagePublished('topic', () => {});
        const cloudEvent =
          createMockCloudEvent(cloudFn, {data});

        expect(cloudEvent.type).equal(
          'google.cloud.pubsub.topic.v1.messagePublished');
        expect(cloudEvent.data).equal(data);
        expect(cloudEvent.subject).equal(undefined);
      });
    });
    describe('CloudEvent Partial', () => {
      it('should generate source from original CloudFunction', () => {
        const type = 'google.firebase.firebasealerts.alerts.v1.published';
        const cloudEventOverride = {
          type,
        };

        const bucketName = 'bucket_name';
        const cloudFn = storage.onObjectArchived(bucketName, () => {});
        /**
         * Note: the original {@link CloudEvent} was a storage event.
         * The test however, is providing a different type.
         * This creates strange behaviour where {@link CloudEvent.source}
         * is inferred by the {@link CloudFunction}.
         * It is the responsibility of the end-user to override the
         * {@link CloudEvent.source} to match their expectations.
         */
        const cloudEvent = createMockCloudEvent(cloudFn, cloudEventOverride);

        const expectedType = type;
        const expectedSource = `//storage.googleapis.com/projects/_/buckets/${bucketName}`;

        expect(cloudEvent.type).equal(expectedType);
        expect(cloudEvent.source).equal(expectedSource);
      });
      it('should override source and fields', () => {
        const type = 'google.firebase.firebasealerts.alerts.v1.published';
        const source = '//firebasealerts.googleapis.com/projects/__PROJECT_ID__';
        const cloudEventOverride = {
          type,
          source,
        };

        const bucketName = 'bucket_name';
        const cloudFn = storage.onObjectArchived(bucketName, () => {});

        const cloudEvent = createMockCloudEvent(cloudFn, cloudEventOverride);

        const expectedType = type;
        const expectedSource = source;

        expect(cloudEvent.type).equal(expectedType);
        expect(cloudEvent.source).equal(expectedSource);
      });
    });
  });
});
