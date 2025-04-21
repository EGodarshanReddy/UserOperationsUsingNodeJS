-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "fatherName" TEXT,
    "age" TEXT,
    "mobileNumber" TEXT NOT NULL,
    "alternateMobileNumber" TEXT,
    "aadharNumber" TEXT NOT NULL,
    "companyName" TEXT,
    "gstNumber" TEXT,
    "createdTimeStamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedTimeStamp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
