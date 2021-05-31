import experiment from "../images/experiment-view.png"
import models from "../images/model-detail-view.png"
import services from "../images/service.png"

export default function ExperimentPage() {

    return (
        <>
            <div className="bg-white">
                <main>
                    <div className="relative pt-16 pb-16 overflow-hidden">
                        <div className="relative">
                            <div
                                className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                                <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                                    <div>
                                        <div className="mt-6">
                                            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                                Manage your machine learning experiments
                                            </h2>
                                            <p className="mt-4 text-lg text-gray-500 text-justify">
                                                HuoguoML enables individual data scientist and data science teams to
                                                track
                                                their experiments with a simple python api. Then, by setting up a
                                                convention for naming their parameters and metrics, they can try
                                                different
                                                algorithms to solve the same problem and run the same algorithms again
                                                on new data to compare models in the future.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-12 sm:mt-16 lg:mt-0">
                                    <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                        <img
                                            className="bottom-10 w-full h-auto rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute max-w-none"
                                            src={experiment}
                                            alt="Inbox user interface"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="mt-16">
                            <div
                                className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                                <div
                                    className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                                    <div>
                                        <div className="mt-6">
                                            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                                Deploy your machine learning model
                                            </h2>
                                            <p className="mt-4 text-lg text-gray-500 text-justify">
                                                HuoguoML allows data scientists to create a model registry where they
                                                can
                                                deploy their trained machine learning models. Beyond that, with HuoguoML
                                                you
                                                can define stages for
                                                your machine learning model, giving you the ability to test your model
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                                    <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                        <img
                                            className="lg:bottom-20 w-full h-auto rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute max-w-none"
                                            src={models}
                                            alt="Customer profile user interface"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="mt-16">
                            <div
                                className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                                <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                                    <div>
                                        <div className="mt-6">
                                            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                                Create machine learning services instantly
                                            </h2>
                                            <p className="mt-4 text-lg text-gray-500 text-justify">
                                                HuoguoML empowers machine learning engineers with tools to quickly
                                                create
                                                services from tracked machine learning models. All services are
                                                centrally
                                                managed and support over-the-air updates. In addition, all services are
                                                based on FastAPI, which gives you the ability to customize the service
                                                for
                                                your own use cases.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-12 sm:mt-16 lg:mt-0">
                                    <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                        <img
                                            className="lg:bottom-5 w-full h-auto rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute max-w-none"
                                            src={services}
                                            alt="Inbox user interface"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
