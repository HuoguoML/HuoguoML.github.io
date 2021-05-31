import tensorflow from "../images/tensorflow.png"
import sklearn from "../images/sklearn.png"
import onnx from "../images/onnx.png"
import pytorch from "../images/pytorch.png"

export default function FrameworkPage() {
    return (
        <div className="bg-white">
            <main>
                <div>
                    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                        <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
                            Supports all state of the art machine learning frameworks
                        </p>
                        <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-4">
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <img className="h-12" src={tensorflow}
                                     alt="Tuple"/>
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <img className="h-12" src={sklearn}
                                     alt="Tuple"/>
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <img className="h-12" src={onnx}
                                     alt="Tuple"/>
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <img className="h-12" src={pytorch}
                                     alt="Tuple"/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}
