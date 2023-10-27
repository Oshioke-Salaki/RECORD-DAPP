// const {
//   time,
//   loadFixture,
// } = require('@nomicfoundation/hardhat-toolbox/network-helpers');
// const { anyValue } = require('@nomicfoundation/hardhat-chai-matchers/withArgs');
// const { expect } = require('chai');

// describe('Lock', function () {
//   // We define a fixture to reuse the same setup in every test.
//   // We use loadFixture to run this setup once, snapshot that state,
//   // and reset Hardhat Network to that snapshot in every test.
//   async function deployRecordLockFixture() {
//     const _totalEmployees = 50;
//     const _totalStock = 150;

//     // Contracts are deployed using the first signer/account by default
//     const [owner, otherAccount] = await ethers.getSigners();

//     console.log(owner, otherAccount);

//     const Lock = await ethers.getContractFactory('Lock');
//     const lock = await Lock.deploy(_totalEmployees, _totalStock);

//     return { lock, _totalEmployees, _totalStock, owner, otherAccount };
//   }

//   describe('Deployment', function () {
//     it('Should set the right total employees', async function () {
//       const { lock, _totalEmployees } = await loadFixture(
//         deployRecordLockFixture
//       );
//       expect(await lock.getTotalEmployees()).to.equal(_totalEmployees);
//     });

//     it('Should set the right total stock', async function () {
//       const { lock, _totalStock } = await loadFixture(deployRecordLockFixture);

//       expect(await lock.getTotalStock()).to.equal(_totalStock);
//     });
//   });

//   describe('view total employees', function () {
//     describe('Validations', function () {
//       it('should return the right total stock', async function () {
//         const { lock, _totalStock } = await loadFixture(
//           deployRecordLockFixture
//         );

//         expect(await lock.getTotalStock()).to.equal(_totalStock);
//       });

//       it('should return the right total employees', async function () {
//         const { lock, _totalEmployees } = await loadFixture(
//           deployRecordLockFixture
//         );

//         expect(await lock.getTotalEmployees()).to.equal(_totalEmployees);
//       });

//       it('should make sure that only Admin can call reduceTotalEmployees', async function () {
//         const { lock, otherAccount } = await loadFixture(
//           deployRecordLockFixture
//         );
//         await expect(lock.reduceTotalEmployees()).to.be.revertedWith(
//           'Only authorized users can call this function'
//         );
//       });

//       it('should make sure that only Admin can call increaseTotalEmployees', async function () {
//         const { lock, otherAccount } = await loadFixture(
//           deployRecordLockFixture
//         );
//         await expect(lock.increaseTotalEmployees()).to.be.revertedWith(
//           'Only authorized users can call this function'
//         );
//       });

//       it('should make sure that only Admin can call increaseTotalStock', async function () {
//         const { lock, otherAccount } = await loadFixture(
//           deployRecordLockFixture
//         );
//         await expect(lock.increaseTotalStock()).to.be.revertedWith(
//           'Only authorized users can call this function'
//         );
//       });

//       it('should make sure that only Admin can call decreaseTotalStock', async function () {
//         const { lock, otherAccount } = await loadFixture(
//           deployRecordLockFixture
//         );
//         await expect(lock.decreaseTotalStock()).to.be.revertedWith(
//           'Only authorized users can call this function'
//         );
//       });
//     });

//     // describe('Events', function () {
//     //   it('Should emit an event on withdrawals', async function () {
//     //     const { lock, unlockTime, lockedAmount } = await loadFixture(
//     //       deployOneYearLockFixture
//     //     );

//     //     await time.increaseTo(unlockTime);

//     //     await expect(lock.withdraw())
//     //       .to.emit(lock, 'Withdrawal')
//     //       .withArgs(lockedAmount, anyValue); // We accept any value as `when` arg
//     //   });
//     // });

//     // describe('Transfers', function () {
//     //   it('Should transfer the funds to the owner', async function () {
//     //     const { lock, unlockTime, lockedAmount, owner } = await loadFixture(
//     //       deployOneYearLockFixture
//     //     );

//     //     await time.increaseTo(unlockTime);

//     //     await expect(lock.withdraw()).to.changeEtherBalances(
//     //       [owner, lock],
//     //       [lockedAmount, -lockedAmount]
//     //     );
//     //   });
//     // });
//   });
// });
