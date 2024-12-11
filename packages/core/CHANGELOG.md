# Changelog

## [0.10.0](https://github.com/figx-io/figx-io/compare/core-v0.9.1...core-v0.10.0) (2024-12-11)


### Miscellaneous Chores

* add npm badge ([2d9f2c8](https://github.com/figx-io/figx-io/commit/2d9f2c8456e7fa5580bdff189ddfa67899ade7ad))
* fix typo ([7d36487](https://github.com/figx-io/figx-io/commit/7d36487699b09e20fabf188c0770d868aad99f67))
* remove console.log ([361b3c1](https://github.com/figx-io/figx-io/commit/361b3c10dada5cd83ac321d7060beb1b8a174a47))
* rename test ([a809388](https://github.com/figx-io/figx-io/commit/a80938841da743c99b811bc692fcdb60f1ac6b13))
* update README badges ([bfdeb4b](https://github.com/figx-io/figx-io/commit/bfdeb4b8275c1ab89d3399ba7f48dea0d074d162))
* update README badges ([8fa4798](https://github.com/figx-io/figx-io/commit/8fa4798289df64bb07baf9f2c1ed6cb25d1a8056))


### Features

* add more assertions ([e89b4b6](https://github.com/figx-io/figx-io/commit/e89b4b63f083d19e3571a85d4118ebd1b510b8d7))
* alignment ([230ff03](https://github.com/figx-io/figx-io/commit/230ff03ff8b92e931885203e7ac7a1fac780eba4))
* create assert_is_non_negative assertion ([129806e](https://github.com/figx-io/figx-io/commit/129806ede060b17478dc9e9804930bb8afa55ab9))
* create assertions ([8197470](https://github.com/figx-io/figx-io/commit/8197470933f45203a8630d59a586dc82122bce76))
* create auto_layout property ([531b1b6](https://github.com/figx-io/figx-io/commit/531b1b6fd4b274193c2081ee93fe3ea74361e702))
* create padding_horizontal property ([5c21bed](https://github.com/figx-io/figx-io/commit/5c21bed371e1243af0fa06ba8e167fd5220babea))
* create padding_vertical property ([8d64aa4](https://github.com/figx-io/figx-io/commit/8d64aa439a36f42b672ef1ca254ffd0201a3fe03))
* create parent_auto_layout property ([01c5f03](https://github.com/figx-io/figx-io/commit/01c5f03283f681c4aa28027fa8d2b17611642a2c))
* implement alignment and auto_layout ([f4af6f0](https://github.com/figx-io/figx-io/commit/f4af6f0ef8a8564e6497933b6b3c7d7929ae7f3c))
* implement Application ([f150fa7](https://github.com/figx-io/figx-io/commit/f150fa7a3c2a896c4f1b58864374ce9f6b1b863f))
* implement default style.display ([0fae9a6](https://github.com/figx-io/figx-io/commit/0fae9a6223a0f827a27953b05452bf51e8cfab75))
* implement invalidation ([0332905](https://github.com/figx-io/figx-io/commit/033290564b56f55d3166d0307a0c83b00fabd3d1))
* implement throwing when width or height is touched ([97a11c0](https://github.com/figx-io/figx-io/commit/97a11c0881473ec3cf7b74ca944f2a8ee8ea133c))
* implement width and height ([b1c2c4e](https://github.com/figx-io/figx-io/commit/b1c2c4eacd0e3b2d5cdd8677a124e7c4ae2b41f1))
* set default Application flexDirection to "column" ([0acdeec](https://github.com/figx-io/figx-io/commit/0acdeec753669b58d0e256f1f9bc5f0c8840725b))


### Code Refactoring

* change width and height to non negative, zero is valid ([5aca054](https://github.com/figx-io/figx-io/commit/5aca0543eb6057e8519be2a5524625ba41796806))
* early instead of inside if statement ([b387f3a](https://github.com/figx-io/figx-io/commit/b387f3a1791da081e8d25f1fc14b3a8fb9c6742c))
* remove width height constraints ([97e5ca7](https://github.com/figx-io/figx-io/commit/97e5ca7a848106857d487064c58123912b4fb00e))
* rename text to characters ([e29c129](https://github.com/figx-io/figx-io/commit/e29c1292b2d6df6c407d96528bc39e19ed8e8d34))
* rewrite sizing ([f5e3780](https://github.com/figx-io/figx-io/commit/f5e378012e91d1d98086b2e243fa97fca7771e62))


### Styles

* remove console.logs ([dbf93e0](https://github.com/figx-io/figx-io/commit/dbf93e0a3d9929ad1060467b06b106c222766a18))


### Tests

* add coverage to dev test ([bbd1994](https://github.com/figx-io/figx-io/commit/bbd1994b9d9e22e59ed8288c9ae5a706d8f25644))
* add test for width and height should throw ([967281e](https://github.com/figx-io/figx-io/commit/967281efa5375365d4690ba1375de1d29203c85c))
* alignment ([e479696](https://github.com/figx-io/figx-io/commit/e47969657e6e750bbec94f71f43c6c6cdcd89aa9))
* change viewport size to 1000x1000 ([1f75d97](https://github.com/figx-io/figx-io/commit/1f75d973a511f42b743aec63002bf1092b90e9f7))
* create Application tests ([c90f753](https://github.com/figx-io/figx-io/commit/c90f7530b6c1720b1933834d28feb3c1e131609a))
* create assertions tests ([e2a7e54](https://github.com/figx-io/figx-io/commit/e2a7e54b76452e81f8cd5e2fd4c310eaefc3c050))
* create size assertion ([a2c8181](https://github.com/figx-io/figx-io/commit/a2c818154c2094aa68e1f4fbdd9b91f99b4859b7))
* create test for assert_is_non_negative ([14a63f4](https://github.com/figx-io/figx-io/commit/14a63f45d4a8cd5afd170299c64deee87c6a9303))
* create test for padding_horizontal and -vertical ([dcb19a9](https://github.com/figx-io/figx-io/commit/dcb19a9ba535818c43e4a1f391f2804470a49a1e))
* create Text test ([db35709](https://github.com/figx-io/figx-io/commit/db357099764f9b6e423bb03eb3ef504be63eb92a))
* exclude interfaces ([0f537ca](https://github.com/figx-io/figx-io/commit/0f537ca40183410cd9a9486723606f906873b47b))
* exclude test files from coverage ([a7f9da7](https://github.com/figx-io/figx-io/commit/a7f9da726cc5b0987b5ae1c45f3c06e4b59331fb))
* exclude test when creating *.d.ts files ([62ccf44](https://github.com/figx-io/figx-io/commit/62ccf4427804ea11ac7649983e8b49173be19b6f))
* refactored because of parent must be Component instance ([c07ad7b](https://github.com/figx-io/figx-io/commit/c07ad7be0edf7df1bc7fb37efaea24d2899ce021))
* remove "none" for now ([4384b98](https://github.com/figx-io/figx-io/commit/4384b98b798085233df0d4fc13f7881fc93ad7c4))
* remove coverage from dev test ([9a8dc41](https://github.com/figx-io/figx-io/commit/9a8dc419931c9923f425863ec58154c678a4482a))
* remove width height constraints ([27bdff8](https://github.com/figx-io/figx-io/commit/27bdff86c46cd5d88b91e57da849517d026f3520))
* rewrite tests to be simpler and test style properties ([1c75d05](https://github.com/figx-io/figx-io/commit/1c75d055b4e1633d017f4e47e153adda54175838))
* test alignment and auto_layout ([ab426f7](https://github.com/figx-io/figx-io/commit/ab426f77cb53ceb0a1a2db5215698924204af7fe))
* update missing auto_layout ([996560a](https://github.com/figx-io/figx-io/commit/996560a93d61a0de0b69854c7a06c8ed81c1d591))
* write tests for width and height ([6d5cddc](https://github.com/figx-io/figx-io/commit/6d5cddc17fee9f1db684dfd2da90fc7a131428ed))

## [0.9.1](https://github.com/figx-io/figx-io/compare/core-v0.9.0...core-v0.9.1) (2024-11-27)


### Tests

* add coverage text report for test:once ([017cd2a](https://github.com/figx-io/figx-io/commit/017cd2ab4879732037e5a9b46d389ea99fd206f6))

## [0.9.0](https://github.com/figx-io/figx-io/compare/core-v0.8.0...core-v0.9.0) (2024-11-24)


### Build System

* add new classes to vite config ([b0d4d6d](https://github.com/figx-io/figx-io/commit/b0d4d6dec51e325278a7b076cce8cf874cd75a4b))


### Continuous Integration

* fix wrong placement in tsconfig ([3e31761](https://github.com/figx-io/figx-io/commit/3e31761027889a6591799596796031624833f26f))


### Miscellaneous Chores

* add exports ([26170c0](https://github.com/figx-io/figx-io/commit/26170c0291a363372fec49256fe19706dcc5e10c))


### Features

* create Application and Interface ([5f91680](https://github.com/figx-io/figx-io/commit/5f91680f50886d8e24e9ffa3a7a20cd953fbe7a1))
* create Container and Interface ([375d32c](https://github.com/figx-io/figx-io/commit/375d32c8662fc97f64935f4b0aa794833683278a))
* create Text and Interface ([44ce870](https://github.com/figx-io/figx-io/commit/44ce87086ce3f335c88a43344f79761675d3a793))


### Tests

* change console log ([e9eb158](https://github.com/figx-io/figx-io/commit/e9eb15870cc87f8711359379cbef9707311a7b54))

## [0.8.0](https://github.com/figx-io/figx-io/compare/core-v0.7.5...core-v0.8.0) (2024-11-24)


### Features

* uppercase exports ([a6dc0bf](https://github.com/figx-io/figx-io/commit/a6dc0bf149a144d66bcca5d63e52bc6570c14540))

## [0.7.5](https://github.com/figx-io/figx-io/compare/core-v0.7.4...core-v0.7.5) (2024-11-23)


### Bug Fixes

* test NPM publish ([3db22be](https://github.com/figx-io/figx-io/commit/3db22be480b07c4f519cd902da2f7d1fedd3b9dc))

## [0.7.4](https://github.com/figx-io/figx-io/compare/core-v0.7.3...core-v0.7.4) (2024-11-23)


### Bug Fixes

* test NPM publish ([b8102b0](https://github.com/figx-io/figx-io/commit/b8102b08b7de7dc9a73c553214038e099c9d5754))

## [0.7.3](https://github.com/figx-io/figx-io/compare/core-v0.7.2...core-v0.7.3) (2024-11-23)


### Bug Fixes

* test NPM publish ([e4a70fd](https://github.com/figx-io/figx-io/commit/e4a70fd00e1e88f9350baf4714b1e3aed822f7f6))

## [0.7.2](https://github.com/figx-io/figx-io/compare/core-v0.7.1...core-v0.7.2) (2024-11-23)


### Bug Fixes

* test NPM publish ([3081da1](https://github.com/figx-io/figx-io/commit/3081da1beed515bebd0488b20050c756ac4dda86))

## [0.7.1](https://github.com/figx-io/figx-io/compare/core-v0.7.0...core-v0.7.1) (2024-11-23)


### Bug Fixes

* test NPM publish ([f0ede48](https://github.com/figx-io/figx-io/commit/f0ede482b99fa1067c1b5680a89d0264ab6b5769))

## [0.7.0](https://github.com/figx-io/figx-io/compare/core-v0.6.0...core-v0.7.0) (2024-11-23)


### Features

* test NPM publish ([bce956a](https://github.com/figx-io/figx-io/commit/bce956ab581ee9a58b62f9a974e0a5a44a9b17cb))

## [0.6.0](https://github.com/figx-io/figx-io/compare/core-v0.5.0...core-v0.6.0) (2024-11-23)


### Features

* test NPM publish ([1060f11](https://github.com/figx-io/figx-io/commit/1060f11008c57a4f8ccb870b22bc36b2d043f44c))

## [0.5.0](https://github.com/figx-io/figx-io/compare/core-v0.4.0...core-v0.5.0) (2024-11-23)


### Features

* test NPM publish ([25b5f3b](https://github.com/figx-io/figx-io/commit/25b5f3b06093f90fcda88990be33b82af8920ae6))

## [0.4.0](https://github.com/figx-io/figx-io/compare/core-v0.3.0...core-v0.4.0) (2024-11-23)


### Features

* test NPM publish ([dab6a8d](https://github.com/figx-io/figx-io/commit/dab6a8d98e709f5a442635996ad9797a6ba9ef54))

## [0.3.0](https://github.com/figx-io/figx-io/compare/core-v0.2.1...core-v0.3.0) (2024-11-23)


### Features

* test NPM publish ([8e96aa9](https://github.com/figx-io/figx-io/commit/8e96aa9ce9aa45e6dcb4118e61760d9bfc707b04))

## [0.2.1](https://github.com/figx-io/figx-io/compare/core-v0.2.0...core-v0.2.1) (2024-11-23)


### Bug Fixes

* set package.json private to false ([c574bd7](https://github.com/figx-io/figx-io/commit/c574bd71e33900631c8cb2af71966442a80e3b79))

## [0.2.0](https://github.com/figx-io/figx-io/compare/core-v0.1.1...core-v0.2.0) (2024-11-23)


### Features

* test NPM Publish ([468a15e](https://github.com/figx-io/figx-io/commit/468a15e02a19e2bdbbed75735997c300dca50185))

## [0.1.1](https://github.com/figx-io/figx-io/compare/core-v0.1.0...core-v0.1.1) (2024-11-23)


### Bug Fixes

* test NPM publish ([c110d83](https://github.com/figx-io/figx-io/commit/c110d838b0b9361d772fba2c593bb97c1023812e))

## [0.1.0](https://github.com/figx-io/figx-io/compare/core-v0.0.1...core-v0.1.0) (2024-11-23)


### Continuous Integration

* testing wireit ([b6abf42](https://github.com/figx-io/figx-io/commit/b6abf42ba9ffe50929f6cf3f9580f10842a0205a))


### Miscellaneous Chores

* add new setup ([f1c4541](https://github.com/figx-io/figx-io/commit/f1c4541966f5ebb4e26be926d91baeef991d7065))


### Features

* create core components ([5e2c0bb](https://github.com/figx-io/figx-io/commit/5e2c0bbd0b458bddeb23223beadf59d98795c493))
* initialize project ([aa9d352](https://github.com/figx-io/figx-io/commit/aa9d3526d2d9dc275e908c13e64eea6f76a7d4c7))


### Tests

* create IComponent test ([f9605e3](https://github.com/figx-io/figx-io/commit/f9605e313679c41f7f9269312aae749c17d926a8))
* create test scripts ([e1506fe](https://github.com/figx-io/figx-io/commit/e1506feb6493b307656b56a2714a93d26edb6f52))
* create vitest config ([697e57d](https://github.com/figx-io/figx-io/commit/697e57da482798638bcca5ab1b0ff5d7bcdf9f83))
